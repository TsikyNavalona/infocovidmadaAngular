import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HelperService } from '../services/helper.service';
import {Title , Meta} from "@angular/platform-browser";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  date:string='';
  list_donnee_covid : any = [];
  error_msg:string = '';
  resultListMonde = '' ;
  resultListMada = '';

  constructor(private titleService:Title,private metaService:Meta,public helperServ : HelperService) {
    this.titleService.setTitle("InfoCovidMada : Madagascar et le monde"); 
    this.metaService.updateTag({name:'description',content:'Situation de Madagascar face au Covid-19'}); 
    //this.date = this.helperServ.covidMada();
  }

  ngOnInit(): void {
    this.afficherListTotalCovidMonde();
    //this.afficherListTotalCovidMada();
  }
  
  afficherListTotalCovidMonde() {
    var date = this.helperServ.getTodayDate();
    const success = (response : any) => { 
       if (response['error'] == null) {
        this.list_donnee_covid = response["total"];
        //console.log(response['total']['today_confirmed']);
        this.resultListMada = response['dates'][date]['countries']['Madagascar']['today_confirmed']; 
        return this.resultListMonde = response['total']['today_confirmed']; 
      } else {
        this.error_msg = response['error'];
      }
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.helperServ.covidMada().subscribe(success, error);
  }
  afficherListTotalCovidMada() {
    var date = this.helperServ.getTodayDate();
    const success = (response : any) => { 
       if (response['error'] == null) {
        console.log(date.toString());
        console.log(response['dates'][date]['countries']['Madagascar']['today_confirmed']);
         
        //return 
      } else {
        this.error_msg = response['error'];
      }
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.helperServ.covidMada().subscribe(success, error);
  }
}
