import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AdminUserService } from '../services/admin-user.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
  user : string = '';
  password : string = '';
  message : string = '';
  error_msg:string = '';
  constructor(private activatedRoute: ActivatedRoute,public adminUserServ : AdminUserService,public helperServ : HelperService, public router : Router) { }

  ngOnInit(): void {
  }
  
  login(){
    const onSuccess = (response:any) => {
      console.log(response['status']);
      if (response['status'] == 200) {
        this.message = 'Ajout ok';
        this.router.navigate(['/InfoCovidMada-Admin-Home']);
      } else if(response['status']==400) {
        this.message = "user ou password n'existe pas !";
        console.log(this.message);
      }
    }
    const onError = (response:any) => {
      
    }

    try {
      this.adminUserServ.LoginFunction(this.user,this.password).subscribe(onSuccess, onError);
      
    } catch (err) {
      //this.message = err;
    }
  }
}
