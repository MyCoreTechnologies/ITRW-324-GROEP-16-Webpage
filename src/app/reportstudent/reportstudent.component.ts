import { Component, OnInit } from '@angular/core';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Router,Routes,RouterLink} from "@angular/router";

@Component({
  selector: 'app-reportstudent',
  templateUrl: './reportstudent.component.html',
  styleUrls: ['./reportstudent.component.css']
})
export class ReportstudentComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}

  ngOnInit() {
  }
  addOffence:{};

  data;

  postOffences(form: NgForm) {
    console.log(form.value);
    this.submitServe.postOffence(form.value)
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
}
