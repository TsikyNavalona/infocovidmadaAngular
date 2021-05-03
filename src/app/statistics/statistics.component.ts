import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from '../services/helper.service';
import {Title , Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StatisticsComponent implements OnInit {
  havedate = false;
  dateCovid="";
  date ="";
  newConfirmedMada = '';
  newConfirmedWorld = '';
  totalConfirmedMada = '';
  totalConfirmedWorld = '';

  newDeathMada = '';
  newDeathWorld = '';
  totalDeathMada = '';
  totalDeathWorld = '';

  newHealedMada = '';
  newHealedWorld = '';
  totalHealedMada = '';
  totalHealedWorld = '';
  
  error_msg:string = '';

  constructor(private activatedRoute: ActivatedRoute,private titleService:Title,private metaService:Meta,public helperServ : HelperService) {
    this.titleService.setTitle("InfoCovidMada : les statistiques de Madagascar face au monde"); 
    this.metaService.updateTag({name:'description',content:'Les chiffres sur covid-19 à Madagascar et le monde '}); }

  ngOnInit(): void {
      const allParams = this.activatedRoute.snapshot.params;
      this.activatedRoute.paramMap.subscribe(x => {
        let dateCovid = x.get('date');
        this.afficherCovidStat(dateCovid);
    });
  }
  afficherCovidStat(dateCovid :any ) {
    this.date = dateCovid;
    
    //dateCovid = this.helperServ.getTodayDate();
    const success = (response : any) => { 
       if (response['error'] == null) {
        this.newConfirmedMada = response['dates'][dateCovid]['countries']['Madagascar']['today_new_confirmed']; 
        this.newConfirmedWorld = response['total']['today_new_confirmed']; 
        this.totalConfirmedMada = response['dates'][dateCovid]['countries']['Madagascar']['today_confirmed']; 
        this.totalConfirmedWorld = response['total']['today_confirmed']; 

        this.newDeathMada = response['dates'][dateCovid]['countries']['Madagascar']['today_new_deaths']; 
        this.newDeathWorld = response['total']['today_new_deaths']; 
        this.totalDeathMada = response['dates'][dateCovid]['countries']['Madagascar']['today_deaths']; 
        this.totalDeathWorld = response['total']['today_deaths']; 

        
        this.newHealedMada = response['dates'][dateCovid]['countries']['Madagascar']['today_new_recovered']; 
        this.newHealedWorld = response['total']['today_new_recovered']; 
        this.totalHealedMada = response['dates'][dateCovid]['countries']['Madagascar']['today_recovered']; 
        this.totalHealedWorld = response['total']['today_recovered']; 
      } else {
        this.error_msg = response['error'];
        console.log(response['error']);
      }
    };
    const error = ( response : any) => {
      this.error_msg = 'Erreur connexion';
    };
    this.helperServ.covidMada(dateCovid).subscribe(success, error);
  }
}
