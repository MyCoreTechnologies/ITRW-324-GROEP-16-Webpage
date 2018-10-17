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
  // variable for the array to display information
  studentBooks;
  //import router to navigate and subservice for the post's and get's
  constructor(private router: Router, private submitServe: subservice) {
    // on load of component display all books of the student when click on header "Profile"
    this.getMyBooksForm(); 
  }
  //method received from service to get all books the student added
  getMyBooksForm(){
    console.log("hello");
    this.submitServe.getMyBooks().subscribe(
        (response) => {
            console.log(response);
            this.studentBooks = response;
        },
        (error) => alert("ERROR\nStudent number or password incorrect!"));
}
  ngOnInit() {
  }
  DeleteBooks:{};
  //method received from service to delete a book that was added by the student, by Book Number
  postDeleteMyBooks(form: NgForm) {
    console.log(form.value);
    this.submitServe.postDeleteBookOfStudent(form.value)
    .subscribe(response => {
      console.log(response);
    },
    (error) => alert("ERROR\nMake sure you delete the right book number!"));
    }  
}

