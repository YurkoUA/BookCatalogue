import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
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

  constructor(navCtrl: NavController, 
    navParams: NavParams,
    alertCtrl: AlertController,
    private authorService: AuthorService) {
      super(navCtrl, navParams, alertCtrl);

      let id: number = navParams.get("id");

      if (id)
        this.loadAuthor(id);
  }

  loadAuthor(id: number) {
    this.authorService.getAuthorById(id)
      .subscribe(a => {
        this.author = a;
      });
  }

  openBookDetails(id: number) {
    this.navigateTo(BookDetailsPage, { id: id });
  }

  openAuthorEditForm() {
    this.navigateTo(AuthorCreatePage, { id: this.author.Id });
  }

  deleteAuthorConfirm() {
    this.confirm('Delete the author', 'Do you really want to delete this author?', () => this.deleteAuthor());
  }

  deleteAuthor() {
    this.authorService.deleteAuthor(this.author.Id)
      .subscribe(b => {
        this.showAlert('The author has been deleted successfully!');
        this.navCtrl.setRoot(AuthorsListPage);
      });
  }
}
