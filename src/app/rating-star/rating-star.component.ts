import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})
export class RatingStarComponent implements OnInit {
  stars: Number[] = [1, 2, 3, 4, 5];
  selectedValue: any;
  @Input() rating: any;

  constructor() { }

  ngOnInit() {
    this.selectedValue = this.rating;
  }
}
