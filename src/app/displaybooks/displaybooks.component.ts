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

  getDisplayBooksSearch(form: NgForm) {
    console.log(form.value);
    this.submitServe.getDisplayBookData()
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
    getDisplayBooksByName(form: NgForm) {
      console.log(form.value);
      this.submitServe.getDisplayBookByName()
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

  ngOnInit() {
  }

}
