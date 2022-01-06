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
    };

    this.certificationsModel = {
      template: this.certifications,
      width: '20rem',
      height: '40rem',
    };

    this.responsiveModel = {
      template: this.responsive,
      width: '40rem',
      height: '40rem',
    };
  }
}
