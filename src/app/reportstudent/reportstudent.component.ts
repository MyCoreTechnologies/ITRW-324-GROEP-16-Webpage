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
  // variable to get the data from the respose send form the service
  data;
  // method created to post the offences to the service to report a student
  postOffences(form: NgForm) {
    console.log(form.value);
    this.submitServe.postOffence(form.value)
    .subscribe(response => {
      console.log(response);      
    },
      (error) => console.log('Problem accuired during reported.'));
    } 
}
