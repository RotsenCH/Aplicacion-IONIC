import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
        mensaje = 'Número de WhatsApp: +593 96 356 2745';
        headerColor = 'success';
        break;
      case 'LinkedIn':
        mensaje =
          'Perfil de LinkedIn: https://www.linkedin.com/in/salo-silva-baba01200/';
        headerColor = 'success';
        break;
      case 'GitHub':
        mensaje = 'Perfil de GitHub: https://github.com/Salo-Quispe';
        headerColor = 'success';
        break;
      case 'Email':
        mensaje = 'Correo electrónico: saloquispe211@gmail.com';
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
