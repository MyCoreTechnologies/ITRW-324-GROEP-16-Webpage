import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowsNewServer = false; // not for the user to create new server
  
 

  constructor() { 
  setTimeout(() => {this.allowsNewServer =true;}, 2000);

  }

  ngOnInit() {
  }
  onUpdateServerName(event: any){
    console.log(event);
  }

}
