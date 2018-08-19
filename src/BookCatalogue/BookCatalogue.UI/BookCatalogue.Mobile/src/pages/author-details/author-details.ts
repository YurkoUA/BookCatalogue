import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BasePage } from '../base-page';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';

@IonicPage()
@Component({
  selector: 'page-author-details',
  templateUrl: 'author-details.html',
})
export class AuthorDetailsPage extends BasePage {
  author: Author = new Author();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private authorService: AuthorService) {
      super(navCtrl, navParams);

      let id: number = navParams.get("id");

      if (id)
        this.loadAuthor(id);
  }

  loadAuthor(id: number) {
    this.authorService.getAuthorById(id)
      .subscribe(a => this.author = a);
  }
}
