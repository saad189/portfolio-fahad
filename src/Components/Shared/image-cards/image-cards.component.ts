import { Component, Input, OnInit } from '@angular/core';
import { CardInfo } from '../card-model';

@Component({
  selector: 'app-image-cards',
  templateUrl: './image-cards.component.html',
  styleUrls: ['./image-cards.component.scss']
})
export class ImageCardsComponent implements OnInit {
  @Input()
  card: CardInfo;
  constructor() { }

  ngOnInit() {
    console.log(this.card)
  }

}
