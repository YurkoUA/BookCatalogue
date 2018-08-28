import { Injectable } from "@angular/core";
import { Book } from "../models/book";
import { BookCreateModel } from "../models/book.create.model";

@Injectable()
export class ModelMapperService {
    toBookCreate(book: Book): BookCreateModel {
        let bookCreate = new BookCreateModel();
        bookCreate.Title = book.Title;
        bookCreate.Pages = book.Pages;
        bookCreate.PublishedDate = book.PublishedDate;
        bookCreate.AuthorsIds = book.Authors.map(b => b.Id);
        return bookCreate;
    }
}