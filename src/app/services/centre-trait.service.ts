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
}
