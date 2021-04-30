import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { CTCComponent } from './ctc/ctc.component';
import { HHComponent } from './hh/hh.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PharmacieComponent,
    CTCComponent,
    HHComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
