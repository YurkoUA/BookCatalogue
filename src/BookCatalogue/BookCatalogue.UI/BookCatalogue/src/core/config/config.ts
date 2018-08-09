import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";

@Injectable()
export class Config {
    private _config: Object;
    private _env: Object;

    constructor(private http: HttpClient) {
    }

    initialize(): void {
        
    }
}