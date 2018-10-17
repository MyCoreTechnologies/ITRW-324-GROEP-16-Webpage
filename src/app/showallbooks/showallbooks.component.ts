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
    this.getAllBooks();
  }  
  ngOnInit() {
  }
filer:{};

    postFilterBooksAddRequest(form: NgForm) {
      console.log("filter");
    console.log(form.value);
    this.submitServe.postDisplayBookData(form.value)
    .subscribe(response => {
      console.log(response);
      this.allbooks = response;
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 
  
  getAllBooks(){
    console.log("hello");
    this.submitServe.getAllBooks().subscribe(
        (response) => {
            console.log(response);
            this.allbooks = response;
        },
        (error) => alert("ERROR\nStudent number or password incorrect!"));
}
  
}



