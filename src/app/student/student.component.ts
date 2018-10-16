import { Component, OnInit } from '@angular/core';
import {Router,Routes,RouterLink} from "@angular/router";
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}

  ngOnInit() {
  }
  ShowBooks:{};
  DeleteBooks:{};
  UpdateBooks:{};
  
  postDeleteMyBooks(form: NgForm) {
    console.log(form.value);
    this.submitServe.postMyBook(form.value)
    .subscribe(response => {
      console.log(response);
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 
  

  postMyBooks(form: NgForm) {
    console.log(form.value);
    this.submitServe.postMyBook(form.value)
    .subscribe(response => {
      console.log(response);
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 
    
}

