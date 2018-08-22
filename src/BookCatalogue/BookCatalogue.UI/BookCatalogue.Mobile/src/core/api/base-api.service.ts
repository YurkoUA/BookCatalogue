import { EmptyObservable } from 'rxjs/Observable/EmptyObservable';
import { baseUrl } from "../../app/app.config";
import { AlertController } from "ionic-angular";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { SpinnerService } from "../../services/spinner.service";

export class BaseApiService {
    constructor(public http: HttpClient, 
                public alertCtrl: AlertController,
                public spinnerService: SpinnerService) {
    }

    protected get baseUrl(): string {
        return baseUrl;
    }

    protected extractData<T>(resp: HttpResponse<T>): any {
        this.spinnerService.hide();
        return resp.body;
    }

    protected handleError<T>(resp: HttpResponse<T> | any): any {
        this.spinnerService.hide();

        let message: string = `Something happened. Try again, please!\n(Status code: ${resp.status})`;

        let errorsArray = resp.error as string[];

        if (errorsArray != undefined && errorsArray.length > 0) {
            message = errorsArray.join('\n');
        }

        this.showAlert(message);
        return new EmptyObservable();
    }

    protected showAlert(message: string) {
        this.alertCtrl.create({
            title: 'Error(s)',
            subTitle: message,
            buttons: ['OK']
        }).present();
    }
}