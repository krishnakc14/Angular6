import { Component, ViewChild, ElementRef } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('myInput') newServ:ElementRef;

  servers = [
    { name: 'TestServer',
      id : this.getId()},

      { name: 'DevServer',
      id : this.getId()}
  ];

  constructor(private serverService:ServerService){}

  addServer(){
    this.servers.push({name:this.newServ.nativeElement.value, id:this.getId()})
    this.serverService.saveServer(this.servers).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

  getId(){

    return Math.round(Math.random()* 1000);
  }

}
