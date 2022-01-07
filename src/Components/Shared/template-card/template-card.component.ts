import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {

  @Input() model: any;
  generatedStyles = "";

  constructor() { }

  createStyles() {
    const keys: string[] = Object.keys(this.model);
    const values: string[] = Object.values(this.model);
    keys.forEach((key, i) => {
      if (key !== 'template') {
        this.generatedStyles += `${key}:${values[i]}; `
      }
    })
  }
  ngOnInit() {
    this.createStyles();
    console.log('Created Style:', this.generatedStyles);
    console.log(this.model)
  }

}
