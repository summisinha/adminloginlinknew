import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { NgModel } from '@angular/forms';
import { LoginadminService } from '../loginadmin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  admin:Admin= new Admin();

  constructor(private Loginadminservice: LoginadminService) { }

  ngOnInit() {
  }
    adminLogin(){
      console.log(this.admin)
      this.Loginadminservice.loginAdmin(this.admin).subscribe(data=>{
        alert("Login Successfuly")
      }, error=>alert("Sorry, Please use correct username and password"));
      

    }
    }

