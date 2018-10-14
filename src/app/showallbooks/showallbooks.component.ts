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

  constructor(private router: Router, private submitServe: subservice) {}
  loginData:{};
  BookByName:{};

  postBooksSearch(form: NgForm) {
    console.log(form.value);
    this.submitServe.postDisplayBook(form.value)
    .subscribe(response => {
      console.log(response);
    },
      (error) => console.log('Problem accuired during displaybooks.'));
    } 
    
  ngOnInit() {
  }

}



