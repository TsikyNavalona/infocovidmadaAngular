import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Meta ,Title} from "@angular/platform-browser";
import { CentreTraitService } from '../services/centre-trait.service';


@Component({
  selector: 'app-admin-ctc',
  templateUrl: './admin-ctc.component.html',
  styleUrls: ['./admin-ctc.component.css']
})
export class AdminCtcComponent implements OnInit {
  nomCentreTraitement : string = '';
  lieuCentreTraitement : string = '';
  error_msg:string = '';
  message:string ='';
  list_Ctc : any = [];

  constructor(private titleService:Title,private metaService:Meta,private activatedRoute: ActivatedRoute,public ctcServ : CentreTraitService,public helperServ : HelperService, public router : Router) {
    this.titleService.setTitle("InfoCovidMada : Gesion Centre de Traitement Covid-19"); 
    this.metaService.updateTag({name:'description',content:"Ajouter ou supprimer des Centre de Traitement Covid-19 à Antananarivo"});
   }

  ngOnInit(): void {
    this.afficherCtc();
  }
  
  insertCtc(){
    if( this.nomCentreTraitement=='' || this.lieuCentreTraitement ==''){
      this.error_msg="Champs non remplis !";
    }
    else{
      this.error_msg='';
      const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_Ctc  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
        }
      }
      const onError = (response:any) => { 
      }
      try {
        this.ctcServ.insertCTC(this.nomCentreTraitement,this.lieuCentreTraitement).subscribe(onSuccess, onError);
      } catch (err) {
        //this.message = err;
      }
    }
  }
  afficherCtc() {
    const success = (response : any) => { 
      console.log(response['status']);
       if (response['status'] == 200) {
        this.list_Ctc = response["datas"];
        this.list_Ctc = this.list_Ctc.map( (item : any) => {
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
    this.ctcServ.GetAllCTC().subscribe(success, error);
  }
  
  deleteCtc(idSelected: any){
    console.log(idSelected);
    const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_Ctc  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
          this.message = 'Pharmacie supprimée';
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
