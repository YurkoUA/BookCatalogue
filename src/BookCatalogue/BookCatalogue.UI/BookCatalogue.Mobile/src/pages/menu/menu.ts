import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
import { BasePage } from '../base-page';
import { AuthorsListPage } from '../authors-list/authors-list';
import { BooksListPage } from '../books-list/books-list';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage extends BasePage {
  items: Array<{ title: string, page: any }>;
  rootPage: any = AuthorsListPage;

  @ViewChild('content')
  nav: Nav;

  constructor(navCtrl: NavController, navParams: NavParams, alertCtrl: AlertController) {
    super(navCtrl, navParams, alertCtrl);
    this.configureMenu();
  }

  configureMenu() {
    this.items = [
      { title: 'Authors', page: AuthorsListPage },
      { title: 'Books', page: BooksListPage }
    ];
  }

  itemClicked(page: any) {
    this.nav.setRoot(page);
  }
}
