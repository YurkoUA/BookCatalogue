import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthorService } from '../../services/author.service';
import { BasePage } from '../base-page';
import { Author } from '../../models/author';
import { isNumber } from 'ionic-angular/util/util';
import { NgForm } from '@angular/forms';
import { AuthorsListPage } from '../authors-list/authors-list';
import { AuthorDetailsPage } from '../author-details/author-details';

@IonicPage()
@Component({
  selector: 'page-author-create',
  templateUrl: 'author-create.html',
})
export class AuthorCreatePage extends BasePage {
  @ViewChild('authorForm')
  authorForm: NgForm;
  
  author: Author = new Author();
  authorMomento: Author;
  
  get isNewAuthor(): boolean {
    return this.author.Id == undefined;
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private authorService: AuthorService) {
      super(navCtrl, navParams);

      let id: number = navParams.get('id');

      if (isNumber(id)) {
        this.loadAuthor(id);
      }
  }

  loadAuthor(id: number) {
    this.authorService.getAuthorById(id)
      .subscribe(a => {
        this.author = a;
        this.authorMomento = Object.assign({}, this.author);
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
      this.authorService.editAuthor(this.author.Id, this.author)
        .subscribe(b => {
          this.showAlert('The author has been updated successfully!');
          this.navCtrl.setRoot(AuthorDetailsPage, { id: this.author.Id });
        });
    }
  }

  cancel() {
    if (this.isNewAuthor) {
       this.navigateTo(AuthorsListPage);
    } else {
      this.navigateTo(AuthorDetailsPage, { id: this.author.Id });
    }
  }

  showAlert(message: string) {
    this.alertCtrl.create({
      message: message,
      buttons: ['OK']
    }).present();
  }
}
