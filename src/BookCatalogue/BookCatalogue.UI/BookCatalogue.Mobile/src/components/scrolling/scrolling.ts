import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scrolling',
  templateUrl: 'scrolling.html'
})
export class ScrollingComponent {
  @Output()
  scroll = new EventEmitter<Function>();

  scrolling(infiniteScroll) {
    this.scrollProcessing(infiniteScroll);
  }

  scrollProcessing(infiniteScroll) {
    setTimeout(() => {
      this.scroll.emit(infiniteScroll);
      infiniteScroll.complete();
    }, 500);
  }
}
