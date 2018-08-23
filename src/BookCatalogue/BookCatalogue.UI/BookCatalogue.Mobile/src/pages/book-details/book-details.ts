import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { Book } from '../../models/book';
import { BookCreatePage } from '../book-create/book-create';
import { BooksListPage } from '../books-list/books-list';

@IonicPage()
@Component({
  selector: 'page-book-details',
  templateUrl: 'book-details.html',
})
export class BookDetailsPage extends BasePage {
  book: Book = new Book();

  constructor(navCtrl: NavController, navParams: NavParams, alertCtrl: AlertController,
        private bookService: BookService) {
      super(navCtrl, navParams, alertCtrl);

      let id = navParams.get('id');
      
      if (id) {
        this.loadBook(id);
      }
  }

  loadBook(id: number) {
    this.bookService.getBookById(id)
      .subscribe(b => this.book = b);
  }

  openBookEditForm() {
    this.navigateTo(BookCreatePage, { id: this.book.Id });
  }

  deleteBookConfirm() {
    this.confirm('Delete the book', 'Do you really want to delete this book?', () => this.deleteBook());
  }

  deleteBook() {
    this.bookService.deleteBook(this.book.Id)
      .subscribe(b => {
        this.showAlert('The book has been deleted successfully!');
        this.navCtrl.setRoot(BooksListPage);
      });
  }
}
