import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacieService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }
  
  GetAllPharmacie(){
    return this.http.get(base_url + 'pharmacie');
  }
  insertPharmacie(nomPharmacie : string , lieuPharmacie : string, numTelephone : string){
    const body = new HttpParams()
      .set('nomPharmacie', nomPharmacie)
      .set('lieuPharmacie', lieuPharmacie)
      .set('numTelephone', numTelephone);
  
    return this.http.post(base_url + 'pharmacie',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  
  supprimerPharmacie(idPharmacie : string ){
    const body = new HttpParams()
      .set('idPharmacie', idPharmacie);
  
    return this.http.post(base_url + 'pharmacie/suppr',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
