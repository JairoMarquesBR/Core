import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController) {}
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Ferramenta indisponivel',
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
