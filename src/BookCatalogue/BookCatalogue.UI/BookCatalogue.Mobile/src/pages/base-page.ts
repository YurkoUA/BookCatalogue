import { NavController, NavParams, AlertController } from "ionic-angular";
import { Page, NavOptions } from "ionic-angular/navigation/nav-util";

export abstract class BasePage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    }

    navigateTo(page: Page, params?: {}, navOptions?: NavOptions) {
        this.navCtrl.push(page, params, navOptions);
    }

    showAlert(message: string) {
      this.alertCtrl.create({
        message: message,
        buttons: ['OK']
      }).present();
    }

    confirm(title: string, message: string, onAccepted: Function) {
      this.alertCtrl.create({
        title: title,
        message: message,
        buttons: [
          {
            text: 'Yes',
            handler: () => onAccepted()
          },
          { text: 'No' }
        ]
      }).present();
    }
}