import { Injectable } from "@angular/core";
import { Config } from "../config/config";
import { AlertController } from "@ionic/angular";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class BaseApiService {
    constructor(public http: HttpClient, 
                public config: Config,
                public alertCtrl: AlertController) {
    }

    extractData<T>(resp: HttpResponse<T>) {
        return resp.body != null ? resp.body : {};
    }

    handleError(error: Response | any) {

        return Observable.empty();
    }
}