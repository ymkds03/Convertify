import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
    selector: 'app-register-page',
    templateUrl: './register.component.html',
    styleUrls: ['./register.page.scss'],
    standalone: false
})
export class RegisterPage {
  registerForm!: FormGroup; // Usa el operador ! para decirle a TypeScript que esta propiedad se inicializa más tarde
  passwordVisible: boolean = false;
  confirmPasswordVisible: boolean = false;
  
  // Patrones de validación
  passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  usernamePattern = /^[a-zA-Z0-9_-]{3,16}$/;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController, 
    private navController: NavController 
  ) {
    this.createForm(); // Asegúrate de que el formulario se crea en el constructor
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ]],
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(16),
        Validators.pattern(this.usernamePattern)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.pattern(this.passwordPattern)
      ]],
      confirmPassword: ['', [
        Validators.required
      ]]
    }, { validators: this.passwordMatchValidator });
  }

  // Valida que las contraseñas coincidan
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    
    if (password === confirmPassword) {
      return null;
    }
    
    return { mismatch: true };
  }

  // Método para alternar la visibilidad de las contraseñas
  togglePasswordVisibility(field: string) {
    if (field === 'password') {
      this.passwordVisible = !this.passwordVisible;
    } else if (field === 'confirmPassword') {
      this.confirmPasswordVisible = !this.confirmPasswordVisible;
    }
  }

  // Método para validar y enviar el formulario
  async validateAndSubmit() {
    if (this.registerForm.invalid) {
      // Marca todos los campos como tocados para mostrar errores
      this.markFormGroupTouched(this.registerForm);
      
      // Verificar campos vacíos
      if (this.hasEmptyFields()) {
        await this.showAlert('Campos vacíos', 'Por favor, completa todos los campos obligatorios.');
        return;
      }
      
      // Verificar formato de email
      const emailControl = this.registerForm.get('email');
      if (emailControl?.invalid && emailControl?.hasError('email')) {
        await this.showAlert('Email inválido', 'Por favor, ingresa una dirección de correo electrónico válida.');
        return;
      }
      
      // Verificar validez del nombre de usuario
      const usernameControl = this.registerForm.get('username');
      if (usernameControl?.invalid && !usernameControl?.hasError('required')) {
        await this.showAlert('Usuario inválido', 'El nombre de usuario debe tener entre 3 y 16 caracteres, y solo puede contener letras, números, guiones y guiones bajos.');
        return;
      }
      
      // Verificar complejidad de la contraseña
      const passwordControl = this.registerForm.get('password');
      if (passwordControl?.hasError('pattern')) {
        await this.showAlert('Contraseña débil', 'La contraseña debe tener entre 8 y 16 caracteres, e incluir al menos una letra mayúscula, una minúscula, un número y un carácter especial.');
        return;
      }
      
      // Verificar longitud de la contraseña
      if (passwordControl?.hasError('minlength')) {
        await this.showAlert('Contraseña corta', 'La contraseña debe tener al menos 8 caracteres.');
        return;
      }
      
      if (passwordControl?.hasError('maxlength')) {
        await this.showAlert('Contraseña larga', 'La contraseña no debe superar los 16 caracteres.');
        return;
      }
      
      // Verificar coincidencia de contraseñas
      if (this.registerForm.hasError('mismatch')) {
        await this.showAlert('Contraseñas no coinciden', 'Las contraseñas ingresadas no coinciden. Por favor, verifica.');
        return;
      }
      
      return;
    }
    
    // Si todo está bien, mostrar alerta de éxito
    this.showSuccessAlert();
  }

  // Marca todos los controles en un formGroup como 'touched'
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  
  // Verifica si hay campos vacíos
  hasEmptyFields(): boolean {
    return (
      !this.registerForm.get('email')?.value ||
      !this.registerForm.get('username')?.value ||
      !this.registerForm.get('password')?.value ||
      !this.registerForm.get('confirmPassword')?.value
    );
  }

  // Método para mostrar alertas genéricas
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });
    await alert.present();
  }

  // Método para mostrar el alert de éxito
  async showSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registro exitoso',
      message: 'Te has registrado correctamente. Ahora puedes iniciar sesión.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navController.navigateRoot('/login'); // Redirige a la página de login
          }
        }
      ]
    });
    await alert.present();
  }
  
  // Métodos auxiliares para verificar errores específicos en la vista
  emailInvalid(): boolean {
    const control = this.registerForm.get('email');
    return !!control && control.invalid && control.touched;
  }
  
  usernameInvalid(): boolean {
    const control = this.registerForm.get('username');
    return !!control && control.invalid && control.touched;
  }
  
  passwordInvalid(): boolean {
    const control = this.registerForm.get('password');
    return !!control && control.invalid && control.touched;
  }
  
  confirmPasswordInvalid(): boolean {
    const control = this.registerForm.get('confirmPassword');
    return (!!control && control.invalid && control.touched) || 
           (this.registerForm.hasError('mismatch') && control?.touched) || false;
  }
}
