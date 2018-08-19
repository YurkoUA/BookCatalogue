import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';

@IonicPage()
@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage extends BasePage {
  book: Book = new Book();

  constructor(public navCtrl: NavController, public navParams: NavParams,
        private bookService: BookService) {
      super(navCtrl, navParams);

      let id = navParams.get('id');
      
      if (id) {
        this.loadBook(id);
      }
  }

  loadBook(id: number) {
    this.bookService.getBookById(id)
      .subscribe(b => this.book = b);
  }
}
