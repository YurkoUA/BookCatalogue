import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../models/book';
import { PagingModel } from '../../models/paging.model';

@Component({
  selector: 'books-grid',
  templateUrl: 'books-grid.html'
})
export class BooksGridComponent {
  @Input()
  books: Book[] = [];

  @Output()
  scrolling = new EventEmitter();

  @Output()
  clicked = new EventEmitter();

  paging: PagingModel = new PagingModel();

  onScroll() {
    this.scrolling.emit(this.paging);
  }

  onClick(id: number) {
    this.clicked.emit(id);
  }
}
