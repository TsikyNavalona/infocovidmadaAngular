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
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminPharmacieComponent } from './admin-pharmacie/admin-pharmacie.component';
import { AdminCtcComponent } from './admin-ctc/admin-ctc.component';
import { AdminHhComponent } from './admin-hh/admin-hh.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PharmacieComponent,
    CTCComponent,
    HHComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminPharmacieComponent,
    AdminCtcComponent,
    AdminHhComponent,
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
