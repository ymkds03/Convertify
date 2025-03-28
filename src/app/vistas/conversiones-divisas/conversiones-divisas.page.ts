import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversiones-divisas',
  templateUrl: './conversiones-divisas.page.html',
  styleUrls: ['./conversiones-divisas.page.scss'],
})
export class ConversionesDivisasPage implements OnInit {
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error
  monedaOrigen: string = 'USD'; // Valor inicial para Dólares Americanos
  monedaDestino: string = 'MXN'; // Valor inicial para Pesos Mexicanos
  cantidad: number | null = null; 
  resultado: number = 0; // Valor inicial
  cotizaciones: any = {}; // Asignar valor inicial
  isMenuOpen: boolean = false;
  idiomaSeleccionado = "";
  resultadoFormateado: string = ''; // Nueva propiedad para almacenar el resultado formateado

  unidadSeleccionadaOrigen: string = 'USD';
  unidadSeleccionadaDestino: string = 'MXN';
  unidades = [
    { value: 'USD', name: 'Dólares Americanos' },
    { value: 'MXN', name: 'Pesos Mexicanos' },
    { value: 'EUR', name: 'Euros' },
    { value: 'GBP', name: 'Libras Esterlinas' }
  ];

  convertir_de_espanol = "Convertir:";
  convertir_de_ingles = "Convert:";
  cantidad_espanol = "Cantidad a convertir:";
  cantidad_ingles = "Amount to convert:";
  a_espanol = "a:   $";
  a_ingles = "a:";
  resultado_espanol = "Resultado:";
  resultado_ingles = "Result:";
  boton_convertir_espanol = "Convertir";
  boton_convertir_ingles = "Convert";
  divisas_espanol = "Divisas";
  divisas_ingles = "Currencies";
  dolares_americanos_español = "Dólares americanos";
  dolares_americanos_ingles = "American dollars";
  not_conection_espanol = "No hay conexión a internet. Usando últimos datos conocidos.";
  not_conection_ingles = "there is no Internet conection. Using latest known data.";
  public folder!: string;

  constructor(private navCtrl: NavController, private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    this.obtenerCotizaciones();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'middle',
    });
    await toast.present();
  }

  obtenerCotizaciones() {
    const apiKey = 'c64d997e74f7dd3476e09f4b';
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    this.http.get(url).subscribe((data: any) => {
      this.cotizaciones = data.conversion_rates;
      localStorage.setItem('cotizaciones', JSON.stringify(this.cotizaciones));
      this.actualizarConversion();
    }, async (error) => {
      const mensaje = this.idiomaSeleccionado === 'es' ? 'No hay conexión a internet. Usando últimos datos conocidos.' : 'No internet connection. Using last known data.';
      await this.mostrarToast(mensaje);

      const cotizacionesGuardadas = localStorage.getItem('cotizaciones');
      if (cotizacionesGuardadas) {
        this.cotizaciones = JSON.parse(cotizacionesGuardadas);
      }
      this.actualizarConversion();
    });
  }

  convertir() {
    this.mensajeError = '';
    if (this.monedaOrigen && this.monedaDestino) {
      if (this.cantidad === null || this.cantidad <= 0) {
        this.mensajeError = this.idiomaSeleccionado === 'es' ? 'La cantidad debe ser mayor a 0' : 'Amount must be greater than 0';
      } else {
        const factorOrigen = this.cotizaciones[this.monedaDestino];
        if (factorOrigen) {
          this.resultado = this.cantidad * factorOrigen;
          this.resultadoFormateado = this.resultado.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
        } else {
          this.mensajeError = this.idiomaSeleccionado === 'es' ? 'Error en la conversión.' : 'Conversion error.';
        }
      }
    }
  }

  actualizarConversion() {
    if (this.monedaOrigen && this.monedaDestino && this.cantidad !== null) {
      this.convertir();
    }
  }

  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }
}
