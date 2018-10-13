import { Component, OnInit } from '@angular/core';
import {Router,Routes,RouterLink} from "@angular/router";
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.css']
})
export class DisplaybooksComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}
  
  loginData:{};
  BookByName:{};
  // loginData( ) {
  //   return this.student_number;
  // };
  data;

  postDisplayBooksSearch(form: NgForm) {
    console.log(form.value);
    this.submitServe.postDisplayBookData(form.value)
    .subscribe(response => {
      console.log(response);
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 

  ngOnInit() {
  }

}
