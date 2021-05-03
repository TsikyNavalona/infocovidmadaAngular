import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCtcComponent } from './admin-ctc/admin-ctc.component';
import { AdminHhComponent } from './admin-hh/admin-hh.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPharmacieComponent } from './admin-pharmacie/admin-pharmacie.component';
import { CTCComponent } from './ctc/ctc.component';
import { HHComponent } from './hh/hh.component';
import { HomeComponent } from './home/home.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { StatisticsComponent } from './statistics/statistics.component';



const routes: Routes = [{
   path: '',
    redirectTo: 'InfoCovidMada-Madagascar-monde',
    pathMatch: 'full'
  },
  {
  path: 'InfoCovidMada-Madagascar-monde',
  component: HomeComponent,
  },{
    path: 'Liste-pharmacies-garde-Antananarivo',
    component: PharmacieComponent,
  },{
    path: 'Liste-Centres-Traitement-Covid-19',
    component: CTCComponent,
  },{
    path: 'Liste-Hôtels-Hôpitaux-Covid-19',
    component: HHComponent,
  },{
    path: 'InfoCovidMada-Admin-Connexion',
    component: AdminLoginComponent,
  },{
    path: 'InfoCovidMada-Admin-Home',
    component: AdminHomeComponent,
  },{
    path: 'InfoCovidMada-Admin-Pharmacie',
    component: AdminPharmacieComponent,
  },{
    path: 'InfoCovidMada-Admin-Ctc',
    component: AdminCtcComponent,
  },{
    path: 'InfoCovidMada-Admin-Hh',
    component: AdminHhComponent,
  },{
    path: 'InfoCovidMada-Statistique/:date',
    component: StatisticsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
