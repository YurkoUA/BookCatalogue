import { Injectable } from "@angular/core";
import { Observable, ObservableInput } from 'rxjs/Observable';
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

    extractData<T>(resp: HttpResponse<T>): any {
        this.spinnerService.hide();
        return resp.body;
    }

    handleError<T>(resp: HttpResponse<T> | any): any {
        this.spinnerService.hide();

        let message: string = "Something happened. Try again, please!";

        if (resp.status == 404) {
            message = "Resourse is not found.";
        } else if (resp.status == 400) {
            let errorsArray = resp.body as string[];

            if (errorsArray.length > 0) {
                message = errorsArray.join('\n');
            }
        }

        this.showAlert(message);
        return new EmptyObservable();
    }

    showAlert(message: string) {
        this.alertCtrl.create({
            subTitle: message,
            buttons: ['OK']
        }).present();
    }
}