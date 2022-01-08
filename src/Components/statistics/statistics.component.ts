import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CardInfo } from '../Shared/card-model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  width_small = "16rem";
  height_small = "13rem";


  teamModel = {};
  clientModel = {};
  experienceModel = {};
  dedicationModel = {};
  projectsModel = {};
  designsModel = {};

  @ViewChild("teamTemplate", { static: true }) teamTemplate: TemplateRef<any>;
  @ViewChild("clientTemplate", { static: true }) clientTemplate: TemplateRef<any>;
  @ViewChild("experienceTemplate", { static: true }) experienceTemplate: TemplateRef<any>;
  @ViewChild("dedicationTemplate", { static: true }) dedicationTemplate: TemplateRef<any>;
  @ViewChild("projectsTemplate", { static: true }) projectsTemplate: TemplateRef<any>;
  @ViewChild("designsTemplate", { static: true }) designsTemplate: TemplateRef<any>;

  refUrl = "../../assets";

  appImageUrl = this.refUrl + '/appImage.png';

  constructor() { }

  ngOnInit() {

    this.teamModel = {
      template: this.teamTemplate,
      width: "34.5rem",
      height: "27rem",
    };
    this.clientModel = {
      template: this.clientTemplate,
      width: this.width_small,
      height: this.height_small
    }
    this.experienceModel = {
      template: this.experienceTemplate,
      width: this.width_small,
      height: this.height_small
    }

    this.dedicationModel = {
      template: this.dedicationTemplate,
      width: this.width_small,
      height: this.height_small
    }
    this.projectsModel = {
      template: this.projectsTemplate,
      width: this.width_small,
      height: this.height_small
    }
    this.designsModel = {
      template: this.designsTemplate,
      width: '69rem',
      height: '24rem',
      background: 'linear-gradient(to right, #ff3347, #b542ed)'
    }

  }

}
