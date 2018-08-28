import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PagingModel } from '../../models/paging.model';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';
import { BasePage } from '../base-page';
import { AuthorDetailsPage } from '../author-details/author-details';
import { AuthorCreatePage } from '../author-create/author-create';
import { SearchModel } from '../../models/search.model';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-authors-list',
  templateUrl: 'authors-list.html',
})
export class AuthorsListPage extends BasePage {
  searchModel: SearchModel = new SearchModel();
  pagingModel: PagingModel = new PagingModel();
  authorsList: Author[] = [];

  isSearch: boolean = false;

  constructor(navCtrl: NavController,
              navParams: NavParams,
              alertCtrl: AlertController,
              private authorService: AuthorService) {
                super(navCtrl, navParams, alertCtrl);
  }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAllAuthors(this.pagingModel)
      .subscribe((a: Author[]) => this.concatAuthors(a, this.pagingModel));
  }

  findAuthors() {
    this.authorService.findAuthors(this.searchModel)
      .debounceTime(4000)
      .subscribe((a: Author[]) => this.concatAuthors(a, this.searchModel));
  }

  openDetails(id: number) {
    this.navigateTo(AuthorDetailsPage, { id: id });
  }

  openCreateForm() {
    this.navigateTo(AuthorCreatePage);
  }

  concatAuthors(authors: Author[], paging: PagingModel) {
    this.authorsList = this.authorsList.concat(authors);
    paging.update();
  }

  search(event: any) {
    let text: string = event.target.value;

    if (text != undefined && text.length > 0) {
      if (!this.isSearch || this.searchModel.expression != text) {
        this.isSearch = true;
        this.authorsList = [];
        this.searchModel.reset();
      }

      this.searchModel.expression = text;
      this.findAuthors();
    } else {
      this.isSearch = false;
      this.searchModel.reset();
      this.pagingModel.reset();
      this.authorsList = [];

      this.loadAuthors();
    }
  }
}
