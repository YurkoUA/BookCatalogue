import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { PagingModel } from '../../models/paging.model';
import { BookDetailsPage } from '../book-details/book-details';
import { BookCreatePage } from '../book-create/book-create';
import { SearchModel } from '../../models/search.model';
import 'rxjs/add/operator/debounceTime';

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
    this.bookService.getAllBooks(this.pagingModel)
      .subscribe(b => this.concatBooks(b, this.pagingModel));
  }

  findBooks() {
    this.bookService.findBook(this.searchModel)
      .debounceTime(4000)
      .subscribe(b => this.concatBooks(b, this.searchModel));
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
      if (!this.isSearch || this.searchModel.expression != text) {
        this.booksGridPaging = this.searchModel;
        this.isSearch = true;
        this.books = [];
        this.searchModel.reset();
      }

      this.searchModel.expression = text;
      this.findBooks();
    } else {
      this.isSearch = false;
      this.searchModel.reset();
      this.pagingModel.reset();
      this.booksGridPaging = this.pagingModel;
      this.books = [];

      this.loadBooks();
    }
  }
}
