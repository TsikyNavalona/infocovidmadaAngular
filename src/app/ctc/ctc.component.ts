import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {Title, Meta} from "@angular/platform-browser";
import { CentreTraitService } from '../services/centre-trait.service';
import { HelperService } from '../services/helper.service';


@Component({
  selector: 'app-ctc',
  templateUrl: './ctc.component.html',
  styleUrls: ['./ctc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CTCComponent implements OnInit {
  
  date = this.helperServ.getTodayDate();
  list_CTC : any = [];
  error_msg:string = '';
  constructor(private titleService:Title,public CentreTraitServ : CentreTraitService, public router : Router,public helperServ : HelperService,private metaService:Meta) {
    this.titleService.setTitle("InfoCovidMada : Liste des Centres de traitement Covid-19");
    this.metaService.updateTag({name:'description',content:'Voici une liste de centre de Traitement à Antananarivo'});
  }
  ngOnInit(): void {
    this.afficherCTC();
  }
  
  afficherCTC() {
    const success = (response : any) => { 
      console.log(response['status']);
       if (response['status'] == 200) {
        this.list_CTC = response["datas"];
        this.list_CTC = this.list_CTC.map( (item : any) => {
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
    this.CentreTraitServ.GetAllCTC().subscribe(success, error);
  }
}
