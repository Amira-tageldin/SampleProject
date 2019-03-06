import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatToolbarModule , MatTableModule, MatCardModule, MatIconModule, MatDividerModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { TableService } from './table/table.service';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    TableComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule ,
    FlexLayoutModule ,
    MatToolbarModule ,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
   RouterModule.forRoot(routes) ,
   ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
