import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-menu-calculos-fotovoltaicos',
  templateUrl: './menu-calculos-fotovoltaicos.page.html',
  styleUrls: ['./menu-calculos-fotovoltaicos.page.scss'],
})
export class MenuCalculosfotoPage implements OnInit {
  angulos_espanol = "Cálculos Fotovoltaicos";
  angulos_ingles = "Photovoltaic calculations";
  datos_espanol = "Corriente Máxima";
  datos_ingles= "Maximum Current";
  conversiones_espanol = " Cálculos Fotovoltaicos";
  conversiones_ingles = " Photovoltaic calculations";
  idiomaSeleccionado = ""; // Agrega la declaración de la propiedad
  public folder!: string;
  constructor(private navCtrl: NavController,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
  }

  goToMainMenu() {
    // Aquí rediriges a la página del menú principal
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    // Aquí navegas hacia atrás en la pila de navegación
    this.navCtrl.back();
  }
}
