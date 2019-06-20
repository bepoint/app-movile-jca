import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-turns',
  templateUrl: './turns.page.html',
  styleUrls: ['./turns.page.scss'],
})
export class TurnsPage implements OnInit {

  constructor( public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Acceso',
      message: 'Seleccione su acceso',
      buttons: [
        {
          text: 'Entrada',
          cssClass: 'primary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Salida',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
