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
      width: "30rem",
      height: "25rem"
    },
    {
      title: '12+',
      content: 'Satisfied Clients',
      width: '12rem',
      height: '10rem'
    },
    {
      title: '3 Years',
      content: 'Experience',
      width: '12rem',
      height: '10rem'
    },
    {
      title: '100%',
      content: 'Dedication',
      width: '12rem',
      height: '10rem'
    },
    {
      title: '21',
      content: 'Built Projects',
      width: '12rem',
      height: '10rem'
    },
    {
      title: 'Stunning Designs',
      content: 'We build beautifully designed web and mobile projects for you using modern tools',
      width: '54rem',
      height: '25rem'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
