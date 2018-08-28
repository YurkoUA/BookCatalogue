import { Component, Input } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {
  @Input()
  rating: number;

  Arr = Array;
}
