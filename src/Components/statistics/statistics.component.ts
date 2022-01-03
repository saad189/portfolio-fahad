import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../Shared/card-model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  width_small = "16rem";
  height_small = "13rem";


  smallCards: CardInfo[] = [
    {
      title: '12+',
      content: 'Satisfied Clients',
      width: this.width_small,
      height: this.height_small
    },
    {
      title: '3 Years',
      content: 'Experience',
      width: this.width_small,
      height: this.height_small
    },
    {
      title: '100%',
      content: 'Dedication',
      width: this.width_small,
      height: this.height_small
    },
    {
      title: '21',
      content: 'Built Projects',
      width: this.width_small,
      height: this.height_small
    }
  ];

  benefitsCards: CardInfo[] = [
    {
      title: "Our Team",
      content: `I have a great team of people with me, Each an Expert in their domain.
    Our Vision and ideas complement each other; Leading to a great product for our clients`,
      width: "33.5rem",
      height: "26.5rem"
    },

    {
      title: 'Stunning Designs',
      content: 'We build beautifully designed web and mobile projects for you using modern tools',
      width: '68rem',
      height: '24rem'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
