import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AdMob, BannerAdPosition, BannerAdSize } from '@capacitor-community/admob';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private menuCtrl: MenuController,
    @Inject(LOCALE_ID) private localeId: string,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeAdMob();

    // Escuchar cambios de ruta para manejar AdMob
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handlePageChange();
      });
  }

  // Inicializar AdMob
  async initializeAdMob() {
    try {
      await AdMob.initialize({});
      console.log('✅ AdMob inicializado con éxito.');

      // Mostrar el banner
      this.showBanner();
    } catch (error) {
      console.error('❌ Error al inicializar AdMob: ', error);
    }
  }

  // Mostrar banner de AdMob
  async showBanner() {
    try {
      console.clear();
      console.log(`📢 Intentando mostrar banner en: ${window.location.pathname}`);

      await AdMob.showBanner({
        adId: 'ca-app-pub-9649587791448147/6459997958',
        position: BannerAdPosition.BOTTOM_CENTER,
        adSize: BannerAdSize.ADAPTIVE_BANNER,
        isTesting: true, // Cambiar a false en producción
        npa: false,
      });

      console.log('✅ Banner mostrado exitosamente.');
    } catch (error) {
      console.error('❌ Error mostrando el banner: ', error);
    }
  }

  // Manejar cambio de página
  handlePageChange() {
    console.clear();
    console.log(`📌 Navegando a la nueva ruta: ${window.location.pathname}`);

    // Volver a mostrar el banner
    this.showBanner();
  }

  // Cerrar el menú lateral
  closeMenu() {
    this.menuCtrl.close();
  }

  public appPages = [
    { title: 'Inicio', url: '/folder/Inbox', icon: 'home' },
    { title: 'Configuración', url: '/configuracion', icon: 'settings' },
    { title: 'Acerca de Convertify', url: '/acerca-de', icon: 'information-circle' },
  ];
  public labels = [];
}
