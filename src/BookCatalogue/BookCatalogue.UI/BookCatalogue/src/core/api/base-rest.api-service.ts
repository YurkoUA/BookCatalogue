import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';

@Injectable()
export class BaseRestApiService extends BaseApiService {
    get<T>(url: string, params: any): Observable<T> {
        return this.http.get<T>(url, { params: params })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    post<T>(url: string, data: T, params: any): Observable<T> {
        return this.http.post<T>(url, data, { params: params })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    update<T>(url: string, data: T, params: any): Observable<boolean> {
        return this.http.put<boolean>(url, data, { params: params })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }

    delete(url: string, params: any): Observable<boolean> {
        return this.http.delete<boolean>(url, { params: params })
            .map(this.extractData)
            .catch(err => this.handleError(err));
    }
}