import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.scss"],
})
export class FaqsComponent implements OnInit {


  constructor() { }
  public InfoPair: { Question: string; Answer: string }[] = [
    {
      Question: "What Servies do you offer exactly?",
      Answer: "My name is Fahad and I am a dumbass",
    },
    {
      Question: "How much does a project cost?",
      Answer: "My name is Fahad and I am a dumbass",
    },
    {
      Question: "Which companies have you worked with?",
      Answer: "My name is Fahad and I am a dumbass",
    },
    {
      Question: "Do you work internationally?",
      Answer: "My name is Fahad and I am a dumbass",
    },
    {
      Question: "Payment Terms for a Project?",
      Answer: "My name is Fahad and I am a dumbass",
    },
    {
      Question: "How long does a project take?",
      Answer: "My name is Fahad and I am a dumbass",
    },
  ];
  ngOnInit() { }
}
