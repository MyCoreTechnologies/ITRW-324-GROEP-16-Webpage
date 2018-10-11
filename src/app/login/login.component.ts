import { Component, OnInit } from '@angular/core';
import { DisplaybooksComponent, } from '../displaybooks/displaybooks.component';
import {Router,Routes,RouterLink} from "@angular/router";
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}
  public goToSearch() {
    this.router.navigate(['/book']);
  }  
  ngOnInit() {
  }


  goHome(){
    this.router.navigate(['home.component.html']);
  }
  goLogout(){
    this.router.navigate(['logout']);
  }
}

const routes : Routes = [
{path: 'logout', component: LogoutComponent}
];


