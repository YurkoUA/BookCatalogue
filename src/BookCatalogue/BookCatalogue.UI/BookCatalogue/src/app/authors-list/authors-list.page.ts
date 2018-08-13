import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { PagingModel } from '../../models/paging.model';
import { Author } from '../../models/author';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.page.html',
  styleUrls: ['./authors-list.page.scss'],
})
export class AuthorsListPage implements OnInit {
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
