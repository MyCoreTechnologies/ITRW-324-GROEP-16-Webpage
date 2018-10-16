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

    serverStatus = '27236285';
    getServerStatus(){
        return this.serverStatus;
    }
    getMyBooksForm(){
        this.submitServe.getMyBooks().subscribe(
            (response) => {
                console.log(response);
            },
            (error) => alert("ERROR\nStudent number or password incorrect!"));
    }
    getShowAllBooks(){
        this.submitServe.getAllBooks().subscribe(
            (response) => {
                console.log(response);
            },
            (error) => alert("ERROR\nStudent number or password incorrect!"));
    }
 @Output() featureSelected = new EventEmitter<string>();


onSelect(feature:string){
this.featureSelected.emit(feature); 
}
}
