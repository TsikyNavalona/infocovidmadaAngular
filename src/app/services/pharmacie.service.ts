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
    return this.http.get(base_url + 'Pharmacie');
  }
}
