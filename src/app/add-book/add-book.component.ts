import { Component, OnInit } from '@angular/core';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Router,Routes,RouterLink} from "@angular/router";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private router: Router, private submitServe: subservice) {}

    
  addBook:{};
  // loginData( ) {
  //   return this.student_number;
  // };
  data;

  postBooks(form: NgForm) {
    console.log(form.value);
    this.submitServe.postBook(form.value)
    .subscribe(response => {
      console.log(response);
     
    },
      (error) => console.log('Problem accuired during login.'));
    } 
  ngOnInit() {
  }

}
