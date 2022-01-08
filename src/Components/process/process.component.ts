import { Component, OnInit } from "@angular/core";
import { CardInfo } from "../Shared/card-model";

@Component({
  selector: "app-process",
  templateUrl: "./process.component.html",
  styleUrls: ["./process.component.scss"],
})
export class ProcessComponent implements OnInit {
  processes: CardInfo[] = [
    {
      subtitle: `Step 1`,
      title: `Project Request`,
      content: `At the beginning of our collaboration is the project request. Your Information
      helps me to understand if I am the right person for your project. If yes, we will arrange a video call so I can learn more.`,
    },
    {
      subtitle: `Step 2`,
      title: `Project Request`,
      content: `At the beginning of our collaboration is the project request. Your Information
      helps me to understand if I am the right person for your project. If yes, we will arrange a video call so I can learn more.`,
    },
  ];
  constructor() { }

  ngOnInit() { }
}
