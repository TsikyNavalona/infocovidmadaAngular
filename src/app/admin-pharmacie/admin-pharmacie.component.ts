import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PharmacieService } from '../services/pharmacie.service';


@Component({
  selector: 'app-admin-pharmacie',
  templateUrl: './admin-pharmacie.component.html',
  styleUrls: ['./admin-pharmacie.component.css']
})
export class AdminPharmacieComponent implements OnInit {
  nom : string = '';
  lieu : string = '';
  num : string = '';
  error_msg:string = '';
  message:string ='';
  list_pharmacie : any = [];
  constructor(private activatedRoute: ActivatedRoute,public pharmacieServ : PharmacieService,public helperServ : HelperService, public router : Router) { }

  ngOnInit(): void {
    this.afficherPharmacie();
  }
  
  insertPharmacie(){
    if( this.nom=='' || this.lieu =='' || this.num ==''){
      this.error_msg="Champs non remplis !";
    }else if(this.num.length != 10 || this.num.charAt(0) != '0'){
      this.error_msg="Numero telephone non valide !";
    }
    else if(isNaN(+this.num)){
      this.error_msg="Numeron ne contient pas de lettre !";
    }
    else{
      this.error_msg='';
      const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_pharmacie  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
        }
      }
      const onError = (response:any) => { 
      }
      try {
        this.pharmacieServ.insertPharmacie(this.nom,this.lieu,this.num).subscribe(onSuccess, onError);
      } catch (err) {
        //this.message = err;
      }
    }
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
  deletePharmacie(idSelected: any){
    console.log(idSelected);
    const onSuccess = (response:any) => {
        console.log(response['status']);
        if (response['status'] == 200) {
          this.list_pharmacie  = [];
          this.router.navigate(['/InfoCovidMada-Admin-Home']);
          this.message = 'Pharmacie supprimée';
        }
      }
      const onError = (response:any) => { 
      }
      try {
        this.pharmacieServ.supprimerPharmacie(idSelected).subscribe(onSuccess, onError);
      } catch (err) {
        //this.message = err;
      }
  }
}
