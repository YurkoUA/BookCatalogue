import { Injectable } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { Observable } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class BaseRestApiService extends BaseApiService {
    get<T>(url: string, params?: any): Observable<T> {
        return this.http.get<T>(this.baseUrl + url, { params: params })
            .pipe(map(this.extractData), catchError(this.handleError));
    }

    post<TData, TReturn>(url: string, data: TData, params?: any): Observable<TReturn> {
        return this.http.post<TData>(this.baseUrl + url, data, { params: params })
        .pipe(map(this.extractData), catchError(this.handleError));
    }

    put<T>(url: string, data: T, params?: any): Observable<boolean> {
        return this.http.put<boolean>(this.baseUrl + url, data, { params: params })
        .pipe(map(this.extractData), catchError(this.handleError));
    }

    delete(url: string, params?: any): Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + url, { params: params })
        .pipe(map(this.extractData), catchError(this.handleError));
    }
}