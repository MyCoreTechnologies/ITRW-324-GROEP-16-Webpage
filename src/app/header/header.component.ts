import { Component, Output,EventEmitter } from "@angular/core";
import { RouterModule, Routes,RouterLink , Router} from '@angular/router';;
import {subservice} from '../../post/web.service';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent{
    constructor(private router: Router, private submitServe: subservice) {}
    myData:{};

 @Output() featureSelected = new EventEmitter<string>();


onSelect(feature:string){
this.featureSelected.emit(feature); 
}
}
