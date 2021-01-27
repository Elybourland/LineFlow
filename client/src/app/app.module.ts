import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavMenuComponent } from './components/title-bar/nav-menu/nav-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { OverviewComponent } from './components/overview/overview.component';
import { MatCardModule } from '@angular/material/card';
import { SummaryCardComponent } from './components/overview/summary-card/summary-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavMenuComponent,
    OverviewComponent,
    SummaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
