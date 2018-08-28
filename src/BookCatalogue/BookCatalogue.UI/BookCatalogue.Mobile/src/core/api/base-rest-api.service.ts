import { BaseApiService } from "./base-api.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { SpinnerService } from "../../services/spinner.service";
import { RequestOptions } from "../../models/request-options.model";

export class BaseRestApiService extends BaseApiService {
    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    get<T>(url: string, options: RequestOptions = {}): Observable<T> {
        if (options.params && options.params.id)
            url += `/${options.params.id}/`;

        if (options.showLoading != false)
            this.spinnerService.show();

        return this.http.get(this.baseUrl + url, { params: options.params, observe: 'response' })
            .map(resp => this.extractData(resp))
            .catch(err => this.handleError(err));
    }

    post<TData, TReturn>(url: string, data: TData, options: RequestOptions = {}): Observable<TReturn> {
        if (options.showLoading != false)
            this.spinnerService.show();
        
        return this.http.post(this.baseUrl + url, data, { params: options.params, observe: 'response' })
            .map(resp => this.extractData(resp).Id)
            .catch(err => this.handleError(err));
    }

    put<T>(url: string, data: T, options: RequestOptions = {}): Observable<boolean> {
        if (options.showLoading != false)
            this.spinnerService.show();
        
        return this.http.put(this.baseUrl + url, data, { params: options.params, observe: 'response' })
            .map(resp => this.extractData(resp))
            .catch(err => this.handleError(err));
    }

    delete(url: string, options: RequestOptions = {}): Observable<boolean> {
        if (options.showLoading != false)
            this.spinnerService.show();
        
        return this.http.delete(this.baseUrl + url, { params: options.params, observe: 'response' })
            .map(resp => this.extractData(resp))
            .catch(err => this.handleError(err));
    }
}