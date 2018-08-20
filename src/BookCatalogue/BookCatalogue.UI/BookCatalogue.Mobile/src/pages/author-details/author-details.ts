import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { PagingModel } from '../../models/paging.model';
import { BookDetailsPage } from '../book-details/book-details';
import { AuthorCreatePage } from '../author-create/author-create';
import { AuthorsListPage } from '../authors-list/authors-list';

@IonicPage()
@Component({
  selector: 'page-author-details',
  templateUrl: 'author-details.html',
})
export class AuthorDetailsPage extends BasePage {
  author: Author = new Author();
  books: Book[] = [];

  constructor(navCtrl: NavController, 
    navParams: NavParams,
    alertCtrl: AlertController,
    private authorService: AuthorService,
    private bookService: BookService) {
      super(navCtrl, navParams, alertCtrl);

      let id: number = navParams.get("id");

      if (id)
        this.loadAuthor(id);
  }

  loadAuthor(id: number) {
    this.authorService.getAuthorById(id)
      .subscribe(a => {
        this.author = a;
        this.loadBooks();
      });
  }

  loadBooks(paging?: PagingModel) {
    this.bookService.getBooksByAuthor(this.author.Id, paging)
      .subscribe(b => {
        this.books = this.books.concat(b);
        
        if (paging != undefined) {
          paging.update();
        }
      });
  }

  openBookDetails(id: number) {
    this.navigateTo(BookDetailsPage, { id: id });
  }

  openAuthorEditForm() {
    this.navigateTo(AuthorCreatePage, { id: this.author.Id });
  }

  deleteAuthorConfirm() {
    this.alertCtrl.create({
      title: 'Delete the author',
      message: 'Do you really want to delete this author?',
      buttons: [
        {
          text: 'Yes',
          handler: () => this.deleteAuthor()
        },
        { text: 'No' }
      ]
    }).present();
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author.Id)
      .subscribe(b => {
        this.showAlert('The author has been deleted successfully!');
        this.navCtrl.setRoot(AuthorsListPage);
      });
  }
}
