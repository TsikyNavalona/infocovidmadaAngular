import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CTCComponent } from './ctc/ctc.component';
import { HHComponent } from './hh/hh.component';
import { HomeComponent } from './home/home.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
