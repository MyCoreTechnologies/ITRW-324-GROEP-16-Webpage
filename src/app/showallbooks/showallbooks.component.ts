import { Component, OnInit } from '@angular/core';
import {Router,Routes,RouterLink} from "@angular/router";
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';
@Component({
  selector: 'app-showallbooks',
  templateUrl: './showallbooks.component.html',
  styleUrls: ['./showallbooks.component.css']
})
export class ShowallbooksComponent implements OnInit {
  allbooks;
  constructor(private router: Router, private submitServe: subservice) {
    // on load display all books when clicked on show all books in navbar
    this.getAllBook();
  }  
  ngOnInit() {
  }
  // variable to save the books found from json format
filer:{};
    // method to post the filter, get from the service
    postFilterBooksAddRequest(form: NgForm) {
      console.log("filter");
    console.log(form.value);
    this.submitServe.postFilterBooksAddRequest(form.value)
    .subscribe(response => {
      console.log(response);
      this.allbooks = response;
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 
  //mehtod created to get all books from service
  getAllBook(){
    console.log("getbooks");
    this.submitServe.getAllBooks().subscribe(
        (response) => {
            console.log(response);
            this.allbooks = response;
        },
        (error) => alert("ERROR\nStudent number or password incorrect!"));
}
}



