import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.page.html',
  styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {
  mensajeError: string = '';
  idiomaSeleccionado: string = 'es'; // Español por defecto
  public folder!: string;

  textos: any = {};

  textos_es = {
    area: "Área",
    convertirDe: "Convertir de :",
    ingresaCantidad: "Cantidad a convertir:",
    a: "A:",
    resultado: "Resultado:",
    botonConvertir: "Convertir",
  };

  textos_en = {
    area: "Area",
    convertirDe: "Convert:",
    ingresaCantidad: "Amount to convert:",
    a: "To:",
    resultado: "Result:",
    botonConvertir: "Convert",
  };

  unidadSeleccionadaOrigen = 'mm2';
  unidadSeleccionadaDestino = 'cm2';
  unidades = [
    { name: 'mm2', value: 'mm2' },
    { name: 'cm2', value: 'cm2' },
    { name: 'dm2', value: 'dm2' },
    { name: 'm2', value: 'm2' },
    { name: 'ft2', value: 'ft2' },
    { name: 'in2', value: 'in2' },
    { name: 'yd2', value: 'yd2' },
    { name: 'km2', value: 'km2' },
    { name: 'acre', value: 'acre' },
    { name: 'mi2', value: 'mi2' },
    { name: 'ha', value: 'ha' }
];

  cantidad: number | null = null;
  resultado = 0;
  resultadoFormateado: string = '';

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
    this.actualizarTextos();
  }

  cambiarIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;
    localStorage.setItem('idiomaSeleccionado', idioma);
    this.actualizarTextos();
  }

  actualizarTextos() {
    this.textos = this.idiomaSeleccionado === 'es' ? this.textos_es : this.textos_en;
  }

  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }

  convertir() {
    this.mensajeError = "";
  
    if (!this.cantidad || this.cantidad <= 0) {
      this.mensajeError = this.idiomaSeleccionado === 'es' 
        ? 'La cantidad debe ser mayor a 0' 
        : 'Amount must be greater than 0';
      this.resultadoFormateado = '';
      return;
    }
  
    if (this.unidadSeleccionadaOrigen === this.unidadSeleccionadaDestino) {
      this.mensajeError = this.idiomaSeleccionado === 'es' 
        ? 'La unidad de origen y la unidad de destino deben ser diferentes.' 
        : 'The source unit and the destination unit must be different.';
      this.resultadoFormateado = '';
      return;
    }
  
    // Obtener el factor de conversión
    const factor = this.obtenerFactorConversion(this.unidadSeleccionadaOrigen, this.unidadSeleccionadaDestino);
    
    // Calcular el resultado
    this.resultado = this.cantidad * factor;
  
    // Formatear el resultado con 2 decimales máximo
    this.resultadoFormateado = `${this.resultado.toLocaleString('en-US', { maximumFractionDigits: 6 })}`;
  }

  obtenerFactorConversion(unidadOrigen: string, unidadDestino: string): number {
    const factoresConversion: Record<string, Record<string, number>> = {
      'mm2': { 'mm2': 1, 'cm2': 0.01, 'dm2': 0.0001, 'm2': 1e-6, 'km2': 1e-12, 'ft2': 1.0764e-5, 'in2': 0.00155, 'yd2': 1.196e-6, 'acre': 2.47105e-10, 'mi2': 3.861e-13, 'ha': 1e-10 },
      'cm2': { 'mm2': 100, 'cm2': 1, 'dm2': 0.01, 'm2': 0.0001, 'km2': 1e-10, 'ft2': 0.001076, 'in2': 0.155, 'yd2': 0.0001196, 'acre': 2.47105e-8, 'mi2': 3.861e-11, 'ha': 1e-8 },
      'dm2': { 'mm2': 10000, 'cm2': 100, 'dm2': 1, 'm2': 0.01, 'km2': 1e-8, 'ft2': 0.1076, 'in2': 15.5, 'yd2': 0.01196, 'acre': 2.47105e-6, 'mi2': 3.861e-9, 'ha': 1e-6 },
      'm2': { 'mm2': 1e6, 'cm2': 10000, 'dm2': 100, 'm2': 1, 'km2': 1e-6, 'ft2': 10.764, 'in2': 1550, 'yd2': 1.196, 'acre': 0.000247105, 'mi2': 3.861e-7, 'ha': 0.0001 },
      'km2': { 'mm2': 1e12, 'cm2': 1e10, 'dm2': 1e8, 'm2': 1e6, 'km2': 1, 'ft2': 1.076e7, 'in2': 1.55e9, 'yd2': 1.196e6, 'acre': 247.105, 'mi2': 0.3861, 'ha': 100 },
      'ft2': { 'mm2': 92903, 'cm2': 929.03, 'dm2': 9.2903, 'm2': 0.092903, 'km2': 9.2903e-8, 'ft2': 1, 'in2': 144, 'yd2': 0.111111, 'acre': 2.2957e-5, 'mi2': 3.587e-8, 'ha': 9.2903e-6 },
      'in2': { 'mm2': 645.16, 'cm2': 6.4516, 'dm2': 0.064516, 'm2': 0.00064516, 'km2': 6.4516e-10, 'ft2': 0.00694444, 'in2': 1, 'yd2': 0.000771605, 'acre': 1.5942e-7, 'mi2': 2.491e-10, 'ha': 6.4516e-8 },
      'yd2': { 'mm2': 836127, 'cm2': 8361.27, 'dm2': 83.6127, 'm2': 0.836127, 'km2': 8.36127e-7, 'ft2': 9, 'in2': 1296, 'yd2': 1, 'acre': 0.000206612, 'mi2': 3.228e-7, 'ha': 8.36127e-5 },
      'acre': { 'mm2': 4.047e9, 'cm2': 4.047e7, 'dm2': 404700, 'm2': 4047, 'km2': 0.004047, 'ft2': 43560, 'in2': 6.273e6, 'yd2': 4840, 'acre': 1, 'mi2': 0.0015625, 'ha': 0.4047 },
      'mi2': { 'mm2': 2.59e12, 'cm2': 2.59e10, 'dm2': 2.59e8, 'm2': 2.59e6, 'km2': 2.59, 'ft2': 2.788e7, 'in2': 4.014e9, 'yd2': 3.098e6, 'acre': 640, 'mi2': 1, 'ha': 259 },
      'ha': { 'mm2': 1e10, 'cm2': 1e8, 'dm2': 1e6, 'm2': 10000, 'km2': 0.01, 'ft2': 107639, 'in2': 1.55e7, 'yd2': 11959.9, 'acre': 2.47105, 'mi2': 0.00386102, 'ha': 1 }
    };

    return factoresConversion[unidadOrigen]?.[unidadDestino] || 1;
  }
}
