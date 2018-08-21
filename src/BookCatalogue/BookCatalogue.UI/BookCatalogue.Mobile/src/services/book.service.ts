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
    constructor(http: HttpClient, alertCtrl: AlertController, spinnerService: SpinnerService) {
        super(http, alertCtrl, spinnerService);
    }

    getAllBooks(paging?: PagingModel): Observable<Book[]> {
        return this.get('api/Book', { params: paging });
    }

    getBookById(id: number): Observable<Book> {
        return this.get('api/Book', { params: { id: id }});
    }

    getBooksByAuthor(authorId: number, paging?: PagingModel): Observable<Book[]> {
        return this.get('api/Book/ByAuthor', { params: Object.assign({ id: authorId }, paging)});
    }

    findBook(search: SearchModel): Observable<Book[]> {
        return this.get('api/Book/Find', { params: search, showLoading: false })
    }

    createBook(book: BookCreateModel): Observable<number> {
        return this.post<BookCreateModel, number>('api/Book', book);
    }

    editBook(id: number, book: BookCreateModel): Observable<boolean> {
        return this.put('api/Book/' + id, book);
    }

    deleteBook(id: number): Observable<boolean> {
        return this.delete('api/Book/' + id);
    }
}