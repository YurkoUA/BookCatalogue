import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { PagingModel } from '../../models/paging.model';
import { BookDetailsPage } from '../book-details/book-details';
import { BookCreatePage } from '../book-create/book-create';
import { SearchModel } from '../../models/search.model';

@IonicPage()
@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html',
})
export class BooksListPage extends BasePage {
  books: Book[] = [];
  isSearch: boolean = false;

  pagingModel: PagingModel = new PagingModel();
  searchModel: SearchModel = new SearchModel();

  booksGridPaging: PagingModel;

  constructor(navCtrl: NavController, 
              navParams: NavParams,
              alertCtrl: AlertController,
              private bookService: BookService) {
    super(navCtrl, navParams, alertCtrl);
    this.loadBooks();
  }
  
  loadBooks() {
    if (this.isSearch) {
      this.bookService.findBook(this.searchModel)
        .subscribe(b => this.concatBooks(b, this.searchModel));
    } else {
      this.bookService.getAllBooks(this.pagingModel)
        .subscribe(b => this.concatBooks(b, this.pagingModel));
    }
  }

  concatBooks(books: Book[], paging?: PagingModel) {
    this.books = this.books.concat(books);

    if (paging != undefined)
      paging.update();
  }

  openBookDetails(id: number) {
    this.navigateTo(BookDetailsPage, { id: id });
  }

  openCreateForm() {
    this.navigateTo(BookCreatePage);
  }

  search(event: any) {
    let text = event.target.value;

    if (text != undefined && text.length > 0) {
      if (!this.isSearch) {
        this.isSearch = true;
        this.booksGridPaging = this.searchModel;
        this.pagingModel.reset();
      }

      if (!this.isSearch || this.searchModel.expression != text) {
        this.searchModel.reset();
        this.books = [];
      }

      this.searchModel.expression = text;

    } else {
      this.booksGridPaging = this.pagingModel;
      this.isSearch = false;
      this.searchModel.reset();
      this.books = [];
    }
      
    this.loadBooks();
  }
}
