import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {
  @Input()
  rating: number;

  get ratingArray(): number[] {
    var array = [];
    array[this.rating - 1] = 0;
    return array;
  }
}
