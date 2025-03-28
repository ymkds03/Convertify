import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  idiomaSeleccionado: string = '';

  opciones = [
    { ruta: 'longitud', icono: 'swap-horizontal-outline', textoEs: 'Longitud', textoEn: 'Length' },
    { ruta: 'area', icono: 'resize-outline', textoEs: 'Área', textoEn: 'Area' },
    { ruta: 'peso', icono: 'barbell-outline', textoEs: 'Peso', textoEn: 'Weight' },
    { ruta: 'volumen', icono: 'cube-outline', textoEs: 'Volumen', textoEn: 'Volume' },
    { ruta: 'temperatura', icono: 'thermometer-outline', textoEs: 'Temperatura', textoEn: 'Temperature' },
    { ruta: 'tiempo', icono: 'time-outline', textoEs: 'Tiempo', textoEn: 'Time' },
    { ruta: 'velocidad', icono: 'speedometer-outline', textoEs: 'Velocidad', textoEn: 'Speed' },
    { ruta: 'angulos', icono: 'compass-outline', textoEs: 'Ángulos', textoEn: 'Angles' },
    { ruta: 'datos', icono: 'cloud-outline', textoEs: 'Datos', textoEn: 'Data' },
    { ruta: 'conversiones-divisas', icono: 'cash-outline', textoEs: 'Divisas', textoEn: 'Currency' },
    { ruta: 'fuerza', icono: 'flash-outline', textoEs: 'Fuerza', textoEn: 'Force' },
    { ruta: 'potencia', icono: 'battery-charging-outline', textoEs: 'Potencia', textoEn: 'Power' },
    { ruta: 'presion', icono: 'bar-chart-outline', textoEs: 'Presión', textoEn: 'Pressure' },
    { ruta: 'trabajo', icono: 'flask-outline', textoEs: 'Energía', textoEn: 'Energy' },
    { ruta: 'corriente-del-motor', icono: 'speedometer-outline', textoEs: 'Corriente del Motor', textoEn: 'Motor Current' },
    { ruta: 'potencia-del-motor', icono: 'construct-outline', textoEs: 'Potencia del Motor', textoEn: 'Motor Power' },
    { ruta: 'tension-del-motor', icono: 'pulse-outline', textoEs: 'Tensión del Motor', textoEn: 'Motor Voltage' },
    { ruta: 'caida-tension', icono: 'trending-down-outline', textoEs: 'Caída de Tensión', textoEn: 'Voltage Drop' },
    { ruta: 'calculo-de-corriente', icono: 'flash-outline', textoEs: 'Corriente', textoEn: 'Current Calculation' },
    { ruta: 'medida-y-peso-cable', icono: 'git-compare-outline', textoEs: 'Medida/Peso Cable', textoEn: 'Measure/Weight Cable' },
    { ruta: 'corrientemax', icono: 'flash-outline', textoEs: 'Corriente Máxima', textoEn: 'Max Current' }
  ];

  
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || "es";
    
  }

  navegar(ruta: string) {
    this.router.navigate([ruta]);
  }
}