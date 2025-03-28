import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <-- Importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // <-- Agregar aquí
    IonicModule,
    RouterModule.forChild([{ path: '', component: RegisterPage }]) // Configuración de la ruta
  ],
  declarations: [RegisterPage] // Declaramos el componente
})
export class RegisterPageModule {}
