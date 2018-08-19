import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagingModel } from '../../models/paging.model';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { BasePage } from '../base-page';
import { AuthorDetailsPage } from '../author-details/author-details';

@IonicPage()
@Component({
  selector: 'page-authors-list',
  templateUrl: 'authors-list.html',
})
export class AuthorsListPage extends BasePage {
  pagingModel: PagingModel = new PagingModel();
  authorsList: Author[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authorService: AuthorService) {
                super(navCtrl, navParams);
}

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAllAuthors(this.pagingModel)
      .subscribe(authors => {
        this.authorsList = this.authorsList.concat(authors);
      });
  }

  openDetails(id: number) {
    this.navigateTo(AuthorDetailsPage, { id: id });
  }
}
