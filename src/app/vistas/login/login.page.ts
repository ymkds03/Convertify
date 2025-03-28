import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.page.scss'],
    standalone: false
})
export class LoginPage {
  usuario: string = '';
  password: string = '';
  passwordType: string = 'password';

  constructor(
    private alertController: AlertController,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  async onSubmit() {
    if (!this.usuario || !this.password) {
      this.showAlert('⚠️ Aviso', 'Por favor, completa todos los campos.');
      return;
    }

    if (this.usuario.length < 4 || this.usuario.length > 16) {
      this.showAlert('⚠️ Error', 'El usuario debe tener entre 4 y 16 caracteres.');
      return;
    }

    if (this.password.length < 8 || this.password.length > 16) {
      this.showAlert('⚠️ Error', 'La contraseña debe tener entre 8 y 16 caracteres.');
      return;
    }

    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.usuario, this.password);
      this.showAlert('✅ Éxito', 'Has ingresado correctamente.');
      this.router.navigateByUrl('/folder/Inbox');
    } catch (error) {
      this.showAlert('❌ Error', 'Usuario o contraseña incorrectos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  logout() {
    this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
