import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { MainRoutingModule } from "./main-routing.module";
import { HeaderComponent } from "../header/header.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { ProcessCardsComponent } from "../process-cards/process-cards.component";
import { CertificationsInfoComponent } from "../certifications-info/certifications-info.component";
import { FaqsComponent } from "../faqs/faqs.component";
import { FooterComponent } from "../footer/footer.component";
import { ProfileComponent } from "../profile/profile.component";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    StatisticsComponent,
    ProcessCardsComponent,
    CertificationsInfoComponent,
    FaqsComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
