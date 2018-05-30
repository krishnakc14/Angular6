import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverStatus = "No new Servers !";
  serverStat = Math.random() > 0.5 ? 'online' : 'offline';
  serverName = "";
  serverCreated = false;
  count = 0;

  constructor() { 
      setTimeout( () => {this.allowNewServer = true;}, 1000)
  }

  ngOnInit() {
  }

  onServerClick(){
    this.serverCreated = true;
    this.serverStatus = "A new Server is added and the name is "+this.serverName;
    this.count++;
  }

  onServerEntry(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  getColour()
  {
    return this.serverStat === 'online' ? 'green' : 'red';
  }

  getServerStat()
  {
    return this.serverStat;
  }
}
