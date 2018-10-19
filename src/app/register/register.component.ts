import { Component, OnInit } from '@angular/core';
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Router,Routes,RouterLink} from "@angular/router";
// classes imported that is needed 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// constuctor uses router for naviation and the post and get service from our service
  constructor(private router: Router, private submitServe: subservice) {}
 // ng from for saving data into an object received from service 
  addStudent:{};
 //the respose will be save in "data" variable in order to display data to user.
  data;
// post method for getting the data in json format and then saved the response in data.
  postStudent(form: NgForm) {
    console.log(form.value);
    this.submitServe.postRegister(form.value)
    .subscribe(response => {
      console.log(response);
      if(sessionStorage.length < 1){
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
          // load header and returned to login 
        // this.header();
        this.loadLogin();
      }else{
        sessionStorage.clear();
        //@ts-ignore
        this.data=response.body;
        sessionStorage.setItem('data', this.data);
        // load header and returned to login 
        // this.header();
        this.loadLogin();
      }
    },
    // if token not found or received then error and if information not entered right
    (error) => alert("ERROR\nCould not register make sure your information is correct!"));
    } 
    // load login if registered navigate to login component
    loadLogin(){
     this.router.navigate(['/login']);
    }
    //header loginheader is displayed on load, normal header when registered is disabled
    // header() {
    //   var x = document.getElementById("loginheader");
    //   var y = document.getElementById("header");   
    //       x.style.visibility = "hidden";
    //       y.style.visibility = "visible"
    // }
  ngOnInit() {   
  } 
}
