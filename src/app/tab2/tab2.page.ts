import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}
  opcionSeleccionada: string = 'aboutme'; // Opción por defecto

  mostrarContenido(opcion: string) {
    this.opcionSeleccionada = opcion;
  }

  async mostrarInformacion(opcion: string) {
    let mensaje = '';
    let headerColor = '';
    // Aquí puedes definir la información correspondiente a cada ícono
    switch (opcion) {
      case 'WhatsApp':
        mensaje = 'Número de WhatsApp: +593 99 115 5259';
        headerColor = 'success';
        break;
      case 'LinkedIn':
        mensaje =
          'Perfil de LinkedIn: https://www.linkedin.com/in/nestor-david-chumania-chumaña-2ab23a252/';
        headerColor = 'success';
        break;
      case 'GitHub':
        mensaje = 'Perfil de GitHub: https://github.com/RotsenCH';
        headerColor = 'success';
        break;
      case 'Email':
        mensaje = 'Correo electrónico: nestorchumania@gmail.com';
        headerColor = 'success';
        break;
      default:
        mensaje = 'Información no disponible';
        break;
    }

    const alert = await this.alertController.create({
      header: opcion,
      message: mensaje,
      buttons: ['OK'],
      cssClass: headerColor ? `alert-${headerColor}` : '',
    });

    await alert.present();
  }
}
