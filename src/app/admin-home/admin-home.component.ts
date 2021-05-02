import { Component, OnInit } from '@angular/core';
import {Meta ,Title} from "@angular/platform-browser";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private titleService:Title,private metaService:Meta) {
    this.titleService.setTitle("InfoCovidMada : Home mode Admin"); 
    this.metaService.updateTag({name:'description',content:"Home en mode Admin pour la gestion d'InfoCovidMada"}); 
   }

  ngOnInit(): void {
  }

}
