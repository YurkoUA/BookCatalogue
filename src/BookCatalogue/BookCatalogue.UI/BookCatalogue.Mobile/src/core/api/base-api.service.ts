import { Injectable } from "@angular/core";
import { Observable, ObservableInput } from 'rxjs/Observable';
import { baseUrl } from "../../app/app.config";
import { AlertController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

export class BaseApiService {
    constructor(public http: HttpClient) {
    }

    protected get baseUrl(): string {
        return baseUrl;
    }

    extractData(resp: Response): any {
        return resp;
    }

    handleError(error: any): any {
        return {};
    }
}