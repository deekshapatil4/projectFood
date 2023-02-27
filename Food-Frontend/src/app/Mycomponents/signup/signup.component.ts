import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string="fa-eye-slash";

  user=new User();
  msg='';
  message=''
  constructor(private service:UserService,private route:Router){}
  ngOnInit(): void {

  }
  registerUser(){
 this.service.RegisterUser(this.user).subscribe(
  data=>{
    console.log("registered successfully");
    this.msg="Registration Successful";
    this.route.navigate(['/home']);
  },
  error=>{
    console.log("something went wrong");
    this.msg=error.error;
  }
 )
  }




  hideshowpass(){
    this.isText=!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";
      }
}
