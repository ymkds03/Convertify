import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'folder/Inbox', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)},

  {
    path: 'folder/Inbox',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule),
  },
  
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
  },
 
  {
    path: 'area',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/area/area.module').then( m => m.AreaPageModule)
  },
  {
    path: 'longitud',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/longitud/longitud.module').then( m => m.LongitudPageModule)
  },
  {
    path: 'peso',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/peso/peso.module').then( m => m.PesoPageModule)
  },
  {
    path: 'volumen',
    loadChildren: () => import('./vistas/vistas_conversiones_basicas/volumen/volumen.module').then( m => m.VolumenPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./vistas/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./vistas/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'conversiones-divisas',
    loadChildren: () => import('./vistas/conversiones-divisas/conversiones-divisas.module').then( m => m.ConversionesDivisasPageModule)
  },
  
  {
    path: 'temperatura',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/temperatura/temperatura.module').then( m => m.TemperaturaPageModule)
  },
  {
    path: 'tiempo',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/tiempo/tiempo.module').then( m => m.TiempoPageModule)
  },
  {
    path: 'velocidad',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_hogar/velocidad/velocidad.module').then( m => m.VelocidadPageModule)
  },
  
  {
    path: 'fuerza',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/fuerza/fuerza.module').then( m => m.FuerzaPageModule)
  },
  {
    path: 'potencia',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/potencia/potencia.module').then( m => m.PotenciaPageModule)
  },
  {
    path: 'presion',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/presion/presion.module').then( m => m.PresionPageModule)
  },
  {
    path: 'trabajo',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_ciencia/trabajo/trabajo.module').then( m => m.TrabajoPageModule)
  },
  
  {
    path: 'angulos',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_varias/angulos/angulos.module').then( m => m.AngulosPageModule)
  },
  {
    path: 'datos',
    loadChildren: () => import('./vistas/vistas_conversiones_unidades_varias/datos/datos.module').then( m => m.DatosPageModule)
  },
  
  {
    path: 'caida-tension',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/caida-tension/caida-tension.module').then( m => m.CaidaTensionPageModule)
  },
  {
    path: 'calculo-de-corriente',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/calculo-de-corriente/calculo-de-corriente.module').then( m => m.CalculoDeCorrientePageModule)
  },
  {
    path: 'calibre-del-cable',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/calibre-del-cable/calibre-del-cable.module').then( m => m.CalibreDelCablePageModule)
  },
  {
    path: 'medida-y-peso-cable',
    loadChildren: () => import('./vistas/vistas_calculos_electricos/medida-y-peso-cable/medida-y-peso-cable.module').then( m => m.MedidaYPesoCablePageModule)
  },
  
  {
    path: 'corriente-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/corriente-del-motor/corriente-del-motor.module').then( m => m.CorrienteDelMotorPageModule)
  },
  {
    path: 'potencia-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/potencia-del-motor/potencia-del-motor.module').then( m => m.PotenciaDelMotorPageModule)
  },
  {
    path: 'tension-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/tension-del-motor/tension-del-motor.module').then( m => m.TensionDelMotorPageModule)
  },
  {
    path: 'factor-potencia-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/factor-potencia-motor/factor-potencia-motor.module').then( m => m.FactorPotenciaMotorPageModule)
  },
  {
    path: 'eficiencia-del-motor',
    loadChildren: () => import('./vistas/vistas_calculos_de_motor/eficiencia-del-motor/eficiencia-del-motor.module').then( m => m.EficienciaDelMotorPageModule)
  },
  
  {
    path: 'corrientemax',
    loadChildren: () => import('./vistas/vistas_calculos_fotovoltaicoss/calculo-de-corriente-maxima/calculo-de-corriente-maxima.module').then( m => m.CalculoDeCorrienteMaximaPageModule)
  },
  

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
