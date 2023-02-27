import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/User';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 type:string="password";
 isText:boolean=false;
 eyeIcon:string="fa-eye-slash";
 user=new User();
 message='';
 constructor(private service:UserService,private route:Router){}
 ngOnInit(): void {

 }
 loginUser(){
  this.service.loginUser(this.user).subscribe(
    data=>{console.log("data recieved")
    this.route.navigate(['/home'])},
    err=>{("something went wrong");
    this.message="Bad Credentials ,please enter the valid username and password"
  }
    )
 }
  hideshowpass(){
this.isText=!this.isText;
this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
this.isText?this.type="text":this.type="password";
  }
}
