import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.css']
})


export class RatingComponent implements OnChanges{
  @Input() rating: number;
  starWidth: number;
  @Output() clickrating: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 110/5;
  }

  onclick(): void{
    this.clickrating.emit("CLICK "+this.rating);
  }

}
