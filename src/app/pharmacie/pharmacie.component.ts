import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PharmacieService } from '../services/pharmacie.service';
import { Router } from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PharmacieComponent implements OnInit {
  
  list_pharmacie : any = [];
  error_msg:string = '';
  constructor(private titleService:Title,public pharmacieServ : PharmacieService, public router : Router) {
    this.titleService.setTitle("InfoCovidMada : Liste des Pharmacies de garde");  }

  ngOnInit(): void {
    this.afficherPharmacie();
  }
  afficherPharmacie() {
    const success = (response : any) => { 
      console.log(response['status']);
       if (response['status'] == 200) {
        this.list_pharmacie = response["datas"];
        this.list_pharmacie = this.list_pharmacie.map( (item : any) => {
          item.show = true;
          return item;  
         })
      } else {
        this.error_msg = response['message'];
      }
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.pharmacieServ.GetAllPharmacie().subscribe(success, error);
  }
}
