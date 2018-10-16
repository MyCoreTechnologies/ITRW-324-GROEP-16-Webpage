import { Component, OnInit } from '@angular/core';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Router,Routes,RouterLink} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ng
  
  constructor(private router: Router, private submitServe: subservice) {}
  addStudent:{};
 
  data;

  postStudent(form: NgForm) {
    console.log(form.value);
    this.submitServe.postRegister(form.value)
    .subscribe(response => {
      console.log(response);
      if(sessionStorage.length < 1){
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
        this.header();
        this.loadDisplayBooks();
      }else{
        sessionStorage.clear();
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
        this.header();
        this.loadDisplayBooks();
      }
    },
    (error) => alert("ERROR\nCould not register make sure your information is correct!"));
    } 


    loadDisplayBooks(){
      this.router.navigate(['/login']);
    }
    header() {
      var x = document.getElementById("loginheader");
      var y = document.getElementById("header");   
          x.style.visibility = "hidden";
          y.style.visibility = "visible"
    }
  ngOnInit() {

   
  }

}
