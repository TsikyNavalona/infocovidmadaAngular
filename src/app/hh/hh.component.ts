import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {Meta ,Title} from "@angular/platform-browser";
import { HelperService } from '../services/helper.service';
import { CentreTraitService } from '../services/centre-trait.service';


@Component({
  selector: 'app-ctc',
  templateUrl: './hh.component.html',
  styleUrls: ['./hh.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HHComponent implements OnInit {
  date = this.helperServ.getTodayDate();
  list_HH : any = [];
  error_msg:string = '';
  constructor(private titleService:Title,private metaService:Meta,public CentreTraitServ : CentreTraitService, public router : Router,public helperServ : HelperService) {
    this.titleService.setTitle("InfoCovidMada : Liste des Hôtels-Hôpitaux Covid-19");
    this.metaService.updateTag({name:'description',content:'Voici une liste des HH à Antananarivo'}); 
  }

  ngOnInit(): void {
    this.afficherCTC();
  }
  
  afficherCTC() {
    const success = (response : any) => { 
      console.log(response['status']);
       if (response['status'] == 200) {
        this.list_HH = response["datas"];
        this.list_HH = this.list_HH.map( (item : any) => {
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
    this.CentreTraitServ.GetAllHH().subscribe(success, error);
  }
}

