import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CertificationsInfoComponent } from "src/Components/certifications-info/certifications-info.component";
import { FaqsComponent } from "src/Components/faqs/faqs.component";
import { FooterComponent } from "src/Components/footer/footer.component";
import { ProcessCardsComponent } from "src/Components/process-cards/process-cards.component";
import { ProfileComponent } from "src/Components/profile/profile.component";
import { StatisticsComponent } from "src/Components/statistics/statistics.component";
import { LayoutModule } from "@angular/cdk/layout";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { ProcessComponent } from "src/Components/process/process.component";
import { TemplateCardComponent } from "src/Components/Shared/template-card/template-card.component";
import { ExpansionPanelComponent } from "src/Components/faqs/expansion-panel/expansion-panel.component";

const modules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatExpansionModule,
  MatCardModule,
];
@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    ProcessCardsComponent,
    CertificationsInfoComponent,
    FaqsComponent,
    FooterComponent,
    ProfileComponent,
    ExpansionPanelComponent,
    ProcessComponent,

    TemplateCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
