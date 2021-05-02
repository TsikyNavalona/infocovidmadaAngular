import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class CentreTraitService {

  constructor(private http : HttpClient, private HelperServ : HelperService) { }

  GetAllCentreTrait(){
    return this.http.get(base_url + 'CentreTrait');
  }
  GetAllCTC(){
    return this.http.get(base_url + 'CentreTrait/1');
  }
  GetAllHH(){
    return this.http.get(base_url + 'CentreTrait/2');
  }
  
  insertCTC(nomCentreTraitement : string , lieuCentreTraitement : string){
    const body = new HttpParams()
      .set('nomCentreTraitement', nomCentreTraitement)
      .set('lieuCentreTraitement', lieuCentreTraitement);
  
    return this.http.post(base_url + 'CentreTrait/1',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  insertHH(nomCentreTraitement : string , lieuCentreTraitement : string){
    const body = new HttpParams()
      .set('nomCentreTraitement', nomCentreTraitement)
      .set('lieuCentreTraitement', lieuCentreTraitement);
  
    return this.http.post(base_url + 'CentreTrait/2',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  
  supprimerCtc(idCentreTraitement : string ){
    const body = new HttpParams()
      .set('idCentreTraitement', idCentreTraitement);
  
    return this.http.post(base_url + 'CentreTrait/suppr',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}
