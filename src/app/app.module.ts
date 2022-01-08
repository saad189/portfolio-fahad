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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSliderModule } from "@angular/material/slider";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from "@angular/material/dialog";
import { ProcessComponent } from "src/Components/process/process.component";
import { TemplateCardComponent } from "src/Components/Shared/template-card/template-card.component";

const modules = [
  LayoutModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  FormsModule,
  ReactiveFormsModule,
  MatBadgeModule,
  MatSelectModule,
  MatSliderModule,
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
    ProcessComponent,

    TemplateCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
