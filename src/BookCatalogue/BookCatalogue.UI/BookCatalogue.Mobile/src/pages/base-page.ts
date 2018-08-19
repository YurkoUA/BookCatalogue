import { NavController, NavParams } from "ionic-angular";
import { Page, NavOptions } from "ionic-angular/navigation/nav-util";

export abstract class BasePage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    navigateTo(page: Page, params?: {}, navOptions?: NavOptions) {
        this.navCtrl.push(page, params, navOptions);
    }
}