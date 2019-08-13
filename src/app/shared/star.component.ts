import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-review',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 5.6 / 5;
  }

  onClick() {
    // console.log(`The rating clicked is ${this.rating}`);
    this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
  }
}
