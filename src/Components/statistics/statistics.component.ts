import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../Shared/card-model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  benefitsCards: CardInfo[] = [
    {
      title: "Our Team",
      content: `I have a great team of people with me, Each an Expert in their domain.
    Our Vision and ideas complement each other; Leading to a great product for our clients`,
      width: "10rem",
      height: "10rem"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
