import { Injectable } from "@angular/core";
import { Config } from "../config/config";
import { AlertController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from 'rxjs';


@Injectable()
export class BaseApiService {
    constructor(public http: HttpClient, 
                public config: Config,
                public alertCtrl: AlertController) {
    }

    protected get baseUrl(): string {
        return "";
    }

    extractData(value: any) {
        return value;
    }

    handleError(error: any, caught: Observable<any>): any {
        return {};
    }
}