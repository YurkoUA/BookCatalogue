import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { SpinnerService } from "../../services/spinner.service";

export class BaseRestApiService extends BaseApiService {
    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    get<T>(url: string, params?: any): Observable<T> {
        if (params.id)
            url += `/${params.id}/`;

        this.spinnerService.show();

        return this.http.get(this.baseUrl + url, { params: params, observe: 'response' })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    post<TData, TReturn>(url: string, data: TData, params?: any): Observable<TReturn> {
        this.spinnerService.show();
        
        return this.http.post(this.baseUrl + url, data, { params: params, observe: 'response' })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    put<T>(url: string, data: T, params?: any): Observable<boolean> {
        this.spinnerService.show();
        
        return this.http.put(this.baseUrl + url, data, { params: params, observe: 'response' })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    delete(url: string, params?: any): Observable<boolean> {
        this.spinnerService.show();
        
        return this.http.delete(this.baseUrl + url, { params: params, observe: 'response' })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }
}