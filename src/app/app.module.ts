import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificationsInfoComponent } from 'src/Components/certifications-info/certifications-info.component';
import { FaqsComponent } from 'src/Components/faqs/faqs.component';
import { FooterComponent } from 'src/Components/footer/footer.component';
import { HeaderComponent } from 'src/Components/header/header.component';
import { ProcessCardsComponent } from 'src/Components/process-cards/process-cards.component';
import { ProfileComponent } from 'src/Components/profile/profile.component';
import { StatisticsComponent } from 'src/Components/statistics/statistics.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatSlideToggleModule, MatInputModule, MatTableModule, MatTabsModule, MatProgressBarModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatExpansionModule, MatTooltipModule, MatCardModule, MatGridListModule, MatSnackBarModule, MatBadgeModule, MatDatepickerModule, MatSelectModule, MatNativeDateModule, MatSliderModule } from '@angular/material';

const modules = [
  LayoutModule,
  MatDialogModule,
  DragDropModule,
  MatSlideToggleModule,
  MatInputModule,
  MatTableModule,
  MatTabsModule,
  MatProgressBarModule,
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
  MatGridListModule,
  FormsModule,
  ReactiveFormsModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatSliderModule
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatisticsComponent,
    ProcessCardsComponent,
    CertificationsInfoComponent,
    FaqsComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
