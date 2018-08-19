import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PagingModel } from '../../models/paging.model';
import { Author } from '../../models/author';
import { AuthorService } from '../../services/author.service';

@IonicPage()
@Component({
  selector: 'page-authors-list',
  templateUrl: 'authors-list.html',
})
export class AuthorsListPage {
  pagingModel: PagingModel = new PagingModel();
  authorsList: Author[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.loadAuthors();
  }

  loadAuthors() {
    this.authorService.getAllAuthors(this.pagingModel)
      .subscribe(authors => {
        this.authorsList = this.authorsList.concat(authors);
      });
  }
}
