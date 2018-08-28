import { Injectable } from "@angular/core";
import { BaseRestApiService } from "../core/api/base-rest-api.service";
import { HttpClient } from "@angular/common/http";
import { PagingModel } from "../models/paging.model";
import { Observable } from "rxjs/Observable";
import { Book } from "../models/book";
import { AlertController } from "ionic-angular";
import { SpinnerService } from "./spinner.service";
import { BookCreateModel } from "../models/book.create.model";
import { SearchModel } from "../models/search.model";

@Injectable()
export class BookService extends BaseRestApiService { 
    private entityUrl: string = 'api/Book';

    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    getAllBooks(paging?: PagingModel): Observable<Book[]> {
        return this.get(this.entityUrl, { params: paging });
    }

    getBookById(id: number): Observable<Book> {
        return this.get(this.entityUrl, { params: { id: id }});
    }

    getBooksByAuthor(authorId: number, paging?: PagingModel): Observable<Book[]> {
        return this.get(`${this.entityUrl}/ByAuthor`, { params: Object.assign({ id: authorId }, paging)});
    }

    findBook(search: SearchModel): Observable<Book[]> {
        return this.get(`${this.entityUrl}/Find`, { params: search, showLoading: false })
    }

    createBook(book: BookCreateModel): Observable<number> {
        return this.post<BookCreateModel, number>(this.entityUrl, book);
    }

    editBook(id: number, book: BookCreateModel): Observable<boolean> {
        return this.put(`${this.entityUrl}/${id}`, book);
    }

    deleteBook(id: number): Observable<boolean> {
        return this.delete(`${this.entityUrl}/${id}`);
    }
}