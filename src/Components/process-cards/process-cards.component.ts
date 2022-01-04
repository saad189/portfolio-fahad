import { Component, Input, OnInit } from "@angular/core";
import { CardInfo } from "../Shared/card-model";

@Component({
  selector: "app-process-cards",
  templateUrl: "./process-cards.component.html",
  styleUrls: ["./process-cards.component.scss"],
})
export class ProcessCardsComponent implements OnInit {
  @Input()
  card: CardInfo;
  constructor() {}

  ngOnInit() {}
}
