import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ObservableInput } from 'rxjs/Observable';
import { AlertController } from "ionic-angular";

export class BaseApiService {
    constructor(public http: HttpClient,
                public alertCtrl: AlertController) {
    }

    protected get baseUrl(): string {
        return "";
    }

    extractData(resp: Response): any {
        return resp.body;
    }

    handleError(error: any): any {
        return {};
    }
}