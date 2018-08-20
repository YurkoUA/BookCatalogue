import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../models/author";
import { PagingModel } from "../models/paging.model";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { SpinnerService } from "./spinner.service";
import { AuthorCreateModel } from "../models/author.create.model";

@Injectable()
export class AuthorService extends BaseRestApiService {
    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    getAllAuthors(paging?: PagingModel): Observable<Author[]> {
        return this.get('api/author', paging);
    }

    getAuthorById(id: number): Observable<Author> {
        return this.get('api/author', { id: id });
    }

    createAuthor(author: AuthorCreateModel): Observable<number> {
        return this.post<AuthorCreateModel, number>('api/author', author);
    }

    editAuthor(id: number, author: AuthorCreateModel): Observable<boolean> {
        return this.put('api/author/' + id, author);
    }

    deleteAuthor(id: number): Observable<boolean> {
        return this.delete('api/author/' + id);
    }
}