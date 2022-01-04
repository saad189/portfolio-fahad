import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-certifications-info",
  templateUrl: "./certifications-info.component.html",
  styleUrls: ["./certifications-info.component.scss"],
})
export class CertificationsInfoComponent implements OnInit {
  constructor() {}

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

  researchedUrl = `${this.refUrl}/`;
  responsiveUrl = `${this.refUrl}/responsive.png`;
  udemyUrl = `${this.refUrl}/udemy.png`;

  myModel = {};

  researchedModel = {};

  designtoolsModel = {};

  certificationsModel = {};

  responsiveModel = {};

  ngOnInit() {
    this.myModel = {
      template: this.myTemplate,
      subheading: "this is my subheading",
    };

    this.researchedModel = {
      template: this.researched,
    };

    this.designtoolsModel = {
      template: this.designtools,
    };

    this.certificationsModel = {
      template: this.certifications,
    };

    this.responsiveModel = {
      template: this.responsive,
    };
  }
}
