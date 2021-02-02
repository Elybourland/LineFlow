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
import { MatTableModule } from '@angular/material/table';
import { UsersComponent } from './components/users/users.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { DepartmentsComponent } from './components/departments/departments.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    NavMenuComponent,
    OverviewComponent,
    SummaryCardComponent,
    UsersComponent,
    DepartmentsComponent
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
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
