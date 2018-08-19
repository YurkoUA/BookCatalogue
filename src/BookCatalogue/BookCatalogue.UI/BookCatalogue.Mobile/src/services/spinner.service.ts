import { Injectable } from "@angular/core";
import { LoadingController, Loading } from "ionic-angular";

@Injectable()
export class SpinnerService {
    private spinner: Loading;
    private counter: number = 0;

    constructor(private loadCtrl: LoadingController) {
    }

    show() {
        if (this.spinner == undefined) {
            this.spinner = this.loadCtrl.create({
                content: "Please, wait..."
            });

            this.spinner.present();
        }
        
        this.counter++;
    }

    hide() {
        this.counter--;

        if (this.spinner != undefined && this.counter == 0) {
            this.spinner.dismiss();
            this.spinner = undefined;
        }
    }
}