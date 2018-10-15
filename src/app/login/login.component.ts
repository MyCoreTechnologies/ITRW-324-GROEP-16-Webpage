import { OnInit, Input } from '@angular/core';
import { DisplaybooksComponent, } from '../displaybooks/displaybooks.component';
import {Router,Routes,RouterLink} from "@angular/router";
import { LogoutComponent } from '../logout/logout.component';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { Component, Output,EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginheaderComponent } from '../loginheader/loginheader.component';
import { Alert } from 'selenium-webdriver';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;                    
    private formSubmitAttempt: boolean; 
  
      private fb: FormBuilder;     
   
  constructor(private router: Router, private submitServe: subservice) {}
  
  public goToSearch() {
    this.router.navigate(['./logout.component.html']);
  }  
  
  ngOnInit() {
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitServe.postLogin(this.form.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }


  
studentnumber;

  getStudent()
  {
    return this.studentnumber;
  }

  loadDisplayBooks(){
    
    this.router.navigate(['/displaybooks']);
  }
  loadDisplayBooksError()
  {
    (error) => console.log('Books could not be displayed');
   
  }
  loginData:{};
  data;
allowserver;

  postSignIn(form: NgForm) {
    console.log(form.value);
    this.submitServe.postLogin(form.value)
    .subscribe(response => { 
      // this.loadDisplayBooks()
      console.log(response);
      if(sessionStorage.length < 1){
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
        this.loadDisplayBooks();
        this.header();
     
      }else{
        sessionStorage.clear();
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
        this.loadDisplayBooks();
        this.header();
      }
    },
    (error) => alert("ERROR\nStudent number or password incorrect!"));
      // this.loadDisplayBooks();
      // this.header();
    
    } 

    // (error) => alert("ERROR\nStudent number or password incorrect!"));


    @Output() selected = new EventEmitter<string>();
    goHome(feature:string)
     {
       this.selected.emit(feature);  
     } 
     
   
  
   header() {
    var x = document.getElementById("loginheader");
    var y = document.getElementById("header");   
        x.style.visibility = "hidden";
        y.style.visibility = "visible"
  }
}




  

