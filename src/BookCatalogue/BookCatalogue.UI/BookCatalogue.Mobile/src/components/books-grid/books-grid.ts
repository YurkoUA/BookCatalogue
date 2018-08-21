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

  @Input()
  paging: PagingModel = new PagingModel();

  @Output()
  scrolling = new EventEmitter();

  @Output()
  clicked = new EventEmitter();

  onScroll() {
    this.scrolling.emit();
  }

  onClick(id: number) {
    this.clicked.emit(id);
  }
}
