import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corriente-del-motor',
  templateUrl: './corriente-del-motor.page.html',
  styleUrls: ['./corriente-del-motor.page.scss'],
})
export class CorrienteDelMotorPage implements OnInit {
  public folder!: string;
  selectedCorriente = 'continua';
  potencia: number | null = null;
  tension: number | null = null;
  eficiencia: number | null = null;
  factor_potencia: number | null = null;
  corriente: number | null = null;

  idiomaSeleccionado = localStorage.getItem('idiomaSeleccionado') || 'es';

  // Traducciones
  traducciones = {
    es: {
      titulo: 'Corriente del motor',
      potencia: 'Potencia (W):',
      tension: 'Voltaje (V):',
      eficiencia: 'Eficiencia (%):',
      factor_potencia: 'Factor de potencia:',
      tipo_corriente: 'Tipo de corriente:',
      corriente: 'Corriente (A):',
      opciones_corriente: {
        continua: 'Continua',
        monofasica: 'Alterna Monofásica',
        bifasica: 'Alterna Bifásica',
        trifasica: 'Alterna Trifásica',
      },
    },
    en: {
      titulo: 'Motor current',
      potencia: 'Power (W):',
      tension: 'Voltage (V):',
      eficiencia: 'Efficiency (%):',
      factor_potencia: 'Power factor:',
      tipo_corriente: 'Current type:',
      corriente: 'Current (A):',
      opciones_corriente: {
        continua: 'DC',
        monofasica: 'Single-phase AC',
        bifasica: 'Two-phase AC',
        trifasica: 'Three-phase AC',
      },
    },
  };

  // Agregar las nuevas propiedades
  calculos_electricos_espanol = "Corriente del motor";
  calculos_electricos_ingles = "Motor current";
  potencia_motor_espanol = "Potencia(W) :";
  potencia_motor_ingles = "Power(W) :";
  tension_motor_espanol = "Voltaje(V): ";
  tension_motor_ingles = "Strain(V): ";
  eficiencia_motor_espanol = "Eficiencia(%) :";
  eficiencia_motor_ingles = "Efficiency(%) :";
  factor_potencia_espanol = "Factor de potencia :";
  factor_potencia_ingles = "Power factor :";
  tension_l_l_espanol = "Tensión (L-L)(V):";
  tension_l_l_ingles = " Voltage (L-L)(V):";
  corriente_espanol = "Corriente (A):";
  corriente_ingles = "Current (A):";
  tipo_corriente_espanol = "Tipo de corriente:";
  tipo_corriente_ingles = "Current type:";

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  goToMainMenu() {
    this.navCtrl.navigateRoot('/folder/Inbox');
  }

  goBack() {
    this.navCtrl.back();
  }

  calculateCorriente() {
    if (this.potencia && this.tension && this.eficiencia) {
      const eficienciaDecimal = this.eficiencia / 100;

      if (this.selectedCorriente === 'continua') {
        this.corriente = +(this.potencia / (this.tension * eficienciaDecimal)).toFixed(3);
      } else if (['bifasica', 'monofasica'].includes(this.selectedCorriente) && this.factor_potencia) {
        this.corriente = +(this.potencia / (this.tension * eficienciaDecimal * this.factor_potencia)).toFixed(3);
      } else if (this.selectedCorriente === 'trifasica' && this.factor_potencia) {
        this.corriente = +(this.potencia / (1.732 * this.tension * eficienciaDecimal * this.factor_potencia)).toFixed(3);
      }
    } else {
      this.corriente = null;
    }
  }
}
