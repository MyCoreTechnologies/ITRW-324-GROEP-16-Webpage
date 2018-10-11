import { Component } from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = '';
  


  
 onNavigate(feature: string){
this.loadedFeature = feature;
 }

}
