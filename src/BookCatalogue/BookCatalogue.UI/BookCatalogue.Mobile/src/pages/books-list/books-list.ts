import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { PagingModel } from '../../models/paging.model';
import { BookDetailsPage } from '../book-details/book-details';
import { BookCreatePage } from '../book-create/book-create';

@IonicPage()
@Component({
  selector: 'page-books-list',
  templateUrl: 'books-list.html',
})
export class BooksListPage extends BasePage {
  books: Book[] = [];
  constructor(navCtrl: NavController, 
              navParams: NavParams,
              alertCtrl: AlertController,
              private bookService: BookService) {
    super(navCtrl, navParams, alertCtrl);
    this.loadBooks();
  }
  
  loadBooks(paging: PagingModel = new PagingModel()) {
    this.bookService.getAllBooks(paging)
      .subscribe(b => {
        this.books = this.books.concat(b);

        if (paging != undefined)
          paging.update();
      });
  }

  openBookDetails(id: number) {
    this.navigateTo(BookDetailsPage, { id: id });
  }

  openCreateForm() {
    this.navigateTo(BookCreatePage);
  }
}
