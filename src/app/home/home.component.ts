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
  date = this.helperServ.getTodayDate();
  constructor(private titleService:Title,private metaService:Meta,public helperServ : HelperService) {
    this.titleService.setTitle("InfoCovidMada : Madagascar et le monde"); 
    this.metaService.updateTag({name:'description',content:'Situation de Madagascar face au Covid-19'});
  }

  ngOnInit(): void {
  }
  
}
