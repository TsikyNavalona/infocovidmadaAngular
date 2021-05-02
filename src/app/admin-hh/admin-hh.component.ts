import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Meta ,Title} from "@angular/platform-browser";
import { CentreTraitService } from '../services/centre-trait.service';

@Component({
  selector: 'app-admin-hh',
  templateUrl: './admin-hh.component.html',
  styleUrls: ['./admin-hh.component.css']
})
export class AdminHhComponent implements OnInit {
  nomCentreTraitement : string = '';
  lieuCentreTraitement : string = '';
  error_msg:string = '';
  message:string ='';
  list_Hh : any = [];

  constructor(private titleService:Title,private metaService:Meta,private activatedRoute: ActivatedRoute,public ctcServ : CentreTraitService,public helperServ : HelperService, public router : Router) {
    this.titleService.setTitle("InfoCovidMada : Gesion Hôtels-Hôpitaux Covid-19"); 
    this.metaService.updateTag({name:'description',content:"Ajouter ou supprimer des Hôtels-Hôpitaux Covid-19 à Antananarivo"}); 
   
  }

  ngOnInit(): void {
    this.afficherHh();
  }

  insertHh(){
    if( this.nomCentreTraitement=='' || this.lieuCentreTraitement ==''){
      this.error_msg="Champs non remplis !";
    }
    else{
      this.error_msg='';
      const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_Hh  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
        }
      }
      const onError = (response:any) => { 
      }
      try {
        this.ctcServ.insertHH(this.nomCentreTraitement,this.lieuCentreTraitement).subscribe(onSuccess, onError);
      } catch (err) {
        //this.message = err;
      }
    }
  }
  afficherHh() {
    const success = (response : any) => { 
      console.log(response['status']);
       if (response['status'] == 200) {
        this.list_Hh = response["datas"];
        this.list_Hh = this.list_Hh.map( (item : any) => {
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
    this.ctcServ.GetAllHH().subscribe(success, error);
  }
  
  deleteHh(idSelected: any){
    console.log(idSelected);
    const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_Hh  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
          this.message = 'Hôtel-Hôpital supprimé';
        }
      }
      const onError = (response:any) => { 
      }
      try {
        this.ctcServ.supprimerCtc(idSelected).subscribe(onSuccess, onError);
      } catch (err) {
        //this.message = err;
      }
  }
}
