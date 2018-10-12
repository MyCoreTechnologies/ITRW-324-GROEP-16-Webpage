import { Component, OnInit } from '@angular/core';
import { DisplaybooksComponent, } from '../displaybooks/displaybooks.component';
import {Router,Routes,RouterLink} from "@angular/router";
import { LogoutComponent } from '../logout/logout.component';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}
  
  public goToSearch() {
    this.router.navigate(['./logout.component.html']);
  }  
  ngOnInit() {
  }

 student_number;
  password;
  loginData:{};
  // loginData( ) {
  //   return this.student_number;
  // };
  data;

allowserver;

  postSignIn(form: NgForm) {
    console.log(form.value);
    this.submitServe.postLogin(form.value)
    .subscribe(response => {
      console.log(response);
      if(sessionStorage.length < 1){
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
      }else{
        sessionStorage.clear();
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
      }
    },
      (error) => console.log('Problem accuired during login.'));
    } 

  // goHome(){
  //   this.router.navigate(['./displaybooks.component.html']);
  // }
  // goLogout(){
  //   this.router.navigate(['logout']);
  // }
}

// const routes : Routes = [
// {path: 'logout', component: LogoutComponent}
// ];


