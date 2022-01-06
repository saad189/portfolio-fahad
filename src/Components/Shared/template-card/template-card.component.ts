import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {

  @Input() model: any;

  constructor() { }

  ngOnInit() {
    console.log(this.model)
  }

}
