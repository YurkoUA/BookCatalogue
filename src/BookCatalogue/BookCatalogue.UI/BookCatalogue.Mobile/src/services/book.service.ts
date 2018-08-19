import { Injectable } from "@angular/core";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";
import { PagingModel } from "../models/paging.model";
import { Observable } from "rxjs/Observable";
import { Book } from "../models/book";

@Injectable()
export class BookService extends BaseRestApiService { 
    constructor(public http: HttpClient) {
        super(http);
    }

    getAllBooks(paging?: PagingModel): Observable<Book[]> {
        return this.get('api/Book', paging);
    }

    getBookById(id: number): Observable<Book> {
        return this.get('api/Book', { id: id });
    }

    getBooksByAuthor(authorId: number, paging?: PagingModel): Observable<Book[]> {
        return this.get('api/Book/ByAuthor', Object.assign({ id: authorId }, paging));
    }
}