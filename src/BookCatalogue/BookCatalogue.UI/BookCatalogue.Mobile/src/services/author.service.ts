import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../models/author";
import { PagingModel } from "../models/paging.model";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";
import { AlertController } from "ionic-angular";
import { SpinnerService } from "./spinner.service";
import { AuthorCreateModel } from "../models/author.create.model";
import { SearchModel } from "../models/search.model";

@Injectable()
export class AuthorService extends BaseRestApiService {
    private entityUrl: string = 'api/Author';

    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    getAllAuthors(paging?: PagingModel): Observable<Author[]> {
        return this.get(this.entityUrl, { params: paging, showLoading: false });
    }

    getAuthorById(id: number): Observable<Author> {
        return this.get(this.entityUrl, { params: { id: id } });
    }

    findAuthors(search: SearchModel): Observable<Author[]> {
        return this.get(`${this.entityUrl}/Find`, { params: search, showLoading: false });
    }

    getForSelectList(): Observable<Author[]> {
        return this.get(`${this.entityUrl}/SelectList`);
    }

    createAuthor(author: AuthorCreateModel): Observable<number> {
        return this.post<AuthorCreateModel, number>(this.entityUrl, author);
    }

    editAuthor(id: number, author: AuthorCreateModel): Observable<boolean> {
        return this.put(`${this.entityUrl}/${id}`, author);
    }

    deleteAuthor(id: number): Observable<boolean> {
        return this.delete(`${this.entityUrl}/${id}`);
    }
}