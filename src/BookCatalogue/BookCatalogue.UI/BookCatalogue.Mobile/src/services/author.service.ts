import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../models/author";
import { PagingModel } from "../models/paging.model";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthorService extends BaseRestApiService {
    constructor(public http: HttpClient) {
        super(http);
    }

    getAllAuthors(paging: PagingModel): Observable<Author[]> {
        return this.get('api/author', paging);
    }

    getAuthorById(id: number): Observable<Author> {
        return this.get('api/author', { id: id });
    }

    createAuthor(author: Author): Observable<number> {
        return this.post<Author, number>('api/author', author);
    }

    editAuthor(id: number, author: Author): Observable<boolean> {
        return this.put('api/author', author, { id: id });
    }

    deleteAuthor(id: number): Observable<boolean> {
        return this.delete('api/author', { id: id });
    }
}