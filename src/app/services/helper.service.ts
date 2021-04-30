import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private http : HttpClient) { }
  formOption (use_authorization = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/json'
      }
    };
    
    // if (use_authorization) {
    //   options['headers']['Authorization'] = 'Bearer ' + user.token;
    // }
    return options;
  }
  makeBody (json:any) {
    let body = [];
    for (let key in json)
      body.push(key + '=' + json[key]);
    return body.join('&');
  }
  getTodayDate(){
    
    var currentDate = new Date()
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear();
    let newdate = null;
    if(month <10){  
      newdate = year + "-0" + month + "-" + day;
    }
    else if(day <10){
      newdate = year + "-" + month + "-0" + day;
    }
    else if(day <10 && month <10){
      newdate = year + "-0" + month + "-0" + day;

    }
    else{
      newdate = year + "-" + month + "-" + day;
      
    }
    return newdate;
  }
  covidMada(){
    return this.http.get('https://api.covid19tracking.narrativa.com/api/'+this.getTodayDate()+'/country/madagascar');
  }
}
