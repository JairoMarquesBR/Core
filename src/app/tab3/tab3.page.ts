import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

tituloAba = 'Terminal';

  constructor(public toastController: ToastController) {}
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Console indisponivel',
      message: 'Função em desenvolvimento',
      position: 'bottom',
      buttons: [
         {
          icon: 'radio-button-off-sharp',
          role: 'cancel',
          handler: () => {
            console.log('Toast fechada');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
