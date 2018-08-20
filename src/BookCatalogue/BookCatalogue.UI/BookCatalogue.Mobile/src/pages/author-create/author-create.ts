import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthorService } from '../../services/author.service';
import { BasePage } from '../base-page';
import { Author } from '../../models/author';
import { isNumber } from 'ionic-angular/util/util';
import { NgForm } from '@angular/forms';
import { AuthorsListPage } from '../authors-list/authors-list';
import { AuthorDetailsPage } from '../author-details/author-details';
import { AuthorCreateModel } from '../../models/author.create.model';

@IonicPage()
@Component({
  selector: 'page-author-create', 
  templateUrl: 'author-create.html',
})
export class AuthorCreatePage extends BasePage {
  @ViewChild('authorForm')
  authorForm: NgForm;
  
  author: AuthorCreateModel = new AuthorCreateModel();
  authorMomento: Author = new Author();
  
  get isNewAuthor(): boolean {
    return this.authorMomento.Id == undefined;
  }

  constructor(navCtrl: NavController, 
              navParams: NavParams,
              alertCtrl: AlertController,
              private authorService: AuthorService) {
      super(navCtrl, navParams, alertCtrl);

      let id: number = navParams.get('id');

      if (isNumber(id)) {
        this.loadAuthor(id);
      }
  }

  loadAuthor(id: number) {
    this.authorService.getAuthorById(id)
      .subscribe(a => {
        this.author.Name = a.Name;
        this.authorMomento = Object.assign({}, a);
      });
  }

  formSubmit() {
    if (!this.authorForm.valid)
      return;

    if (this.isNewAuthor) {
      this.authorService.createAuthor(this.author)
        .subscribe(id => {
          this.showAlert('The author has been created successfully!');
          this.navCtrl.setRoot(AuthorDetailsPage, { id: id });
        });
    } else {
      this.authorService.editAuthor(this.authorMomento.Id, this.author)
        .subscribe(b => {
          this.showAlert('The author has been updated successfully!');
          this.navCtrl.setRoot(AuthorDetailsPage, { id: this.authorMomento.Id });
        });
    }
  }

  cancel() {
    if (this.isNewAuthor) {
      this.navigateTo(AuthorsListPage);
    } else {
      this.navigateTo(AuthorDetailsPage, { id: this.authorMomento.Id });
    }
  }
}
