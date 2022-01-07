import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-certifications-info",
  templateUrl: "./certifications-info.component.html",
  styleUrls: ["./certifications-info.component.scss"],
})
export class CertificationsInfoComponent implements OnInit {
  constructor() { }

  @ViewChild("myTemplate", { static: true }) myTemplate: TemplateRef<any>;

  @ViewChild("researched", { static: true }) researched: TemplateRef<any>;

  @ViewChild("designtools", { static: true }) designtools: TemplateRef<any>;

  @ViewChild("certifications", { static: true })
  certifications: TemplateRef<any>;

  @ViewChild("responsive", { static: true }) responsive: TemplateRef<any>;

  refUrl = "../../assets";

  designImages: string[] = [
    `${this.refUrl}/instagram.webp`,
    `${this.refUrl}/wordpress.png`,
    `${this.refUrl}/facebook.png`,
    `${this.refUrl}/XD.png`,
    `${this.refUrl}/photoshop.png`,
    `${this.refUrl}/illustrator.png`,
  ];

  researchedUrl = `${this.refUrl}/researched.jpg`;
  responsiveUrl = `${this.refUrl}/responsive.png`;
  udemyUrl = `${this.refUrl}/udemy.png`;
  courseraUrl = `${this.refUrl}/coursera.png`

  researchedModel = {};

  designtoolsModel = {};

  certificationsModel = {};

  responsiveModel = {};

  ngOnInit() {

    this.researchedModel = {
      template: this.researched,
      width: '30rem',
      height: '20rem',
    };

    this.designtoolsModel = {
      template: this.designtools,
      width: '30rem',
      height: '20rem',
      background: '#c4c4c2'
    };

    this.certificationsModel = {
      template: this.certifications,
      width: '25rem',
      height: '40rem',
      background: '#f2e2bd'
    };

    this.responsiveModel = {
      template: this.responsive,
      overflow: 'visible',
      width: '36rem',
      height: '40rem',
      background: '#292928'
    };
  }
}
