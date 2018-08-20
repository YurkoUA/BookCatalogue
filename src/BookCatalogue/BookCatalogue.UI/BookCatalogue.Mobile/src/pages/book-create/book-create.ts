import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { BookService } from '../../services/book.service';
import { NgForm } from '@angular/forms';
import { BookCreateModel } from '../../models/book.create.model';
import { Book } from '../../models/book';
import { BooksListPage } from '../books-list/books-list';
import { BookDetailsPage } from '../book-details/book-details';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { PagingModel } from '../../models/paging.model';
import { isNumber } from 'ionic-angular/util/util';

@IonicPage()
@Component({
  selector: 'page-book-create',
  templateUrl: 'book-create.html',
})
export class BookCreatePage extends BasePage {
  @ViewChild('bookForm')
  bookForm: NgForm;

  book: BookCreateModel = new BookCreateModel();
  bookMomento: Book = new Book();

  authors: Author[] = [];

  get isNewBook(): boolean {
    return this.bookMomento.Id == undefined;
  }

  constructor(navCtrl: NavController, navParams: NavParams, alertCtrl: AlertController, 
      private bookService: BookService,
      private authorService: AuthorService) {
    super(navCtrl, navParams, alertCtrl);
    this.loadAuthors();

    let id: number = navParams.get('id');

      if (isNumber(id)) {
        this.loadBook(id);
      }
  }

  loadBook(id: number) {
    this.bookService.getBookById(id)
      .subscribe(b => {
        this.bookMomento = Object.assign({}, b);
        this.book.Title = b.Title;
        this.book.Pages = b.Pages;
        this.book.PublishedDate = b.PublishedDate;
        this.book.AuthorsIds = b.Authors.map(b => b.Id);
      });
  }

  loadAuthors() {
    this.authorService.getAllAuthors(new PagingModel(0, 1000000))
      .subscribe(a => this.authors = this.authors.concat(a));
  }

  formSubmit() {
    if (!this.bookForm.valid)
      return;

    if (this.isNewBook) {
      this.bookService.createBook(this.book)
        .subscribe(id => {
          this.showAlert('The book has been created successfully.');
          this.navCtrl.setRoot(BookDetailsPage, { id: id });
        });
    } else {
      this.bookService.editBook(this.bookMomento.Id, this.book)
        .subscribe(b => {
          this.showAlert('The book has been updated successfully.');
          this.navCtrl.setRoot(BookDetailsPage, { id: this.bookMomento.Id });
        });
    }
  }

  cancel() {
    if (this.isNewBook) {
      this.navigateTo(BooksListPage);
    } else {
      this.navigateTo(BookDetailsPage, { id: this.bookMomento.Id });
    }
  }
}
