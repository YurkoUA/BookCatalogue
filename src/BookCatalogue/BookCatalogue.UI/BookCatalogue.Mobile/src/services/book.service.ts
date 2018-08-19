import { Injectable } from "@angular/core";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BookService extends BaseRestApiService { 
    constructor(public http: HttpClient) {
        super(http);
    } 
}