import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-certifications-info",
  templateUrl: "./certifications-info.component.html",
  styleUrls: ["./certifications-info.component.scss"],
})
export class CertificationsInfoComponent implements OnInit {
  constructor() {}

  @ViewChild("myTemplate", { static: true }) myTemplate: TemplateRef<any>;

  myModel = {};

  ngOnInit() {
    this.myModel = {
      template: this.myTemplate,
    };
  }
}
