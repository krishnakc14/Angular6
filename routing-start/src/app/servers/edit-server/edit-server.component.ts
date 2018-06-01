import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { canComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, canComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  myValue:String = "Hello I am getting emitted!";
  @ViewChild('name') name:ElementRef;
  allowEditing = false;
  show = "active";
  isServerUpdated = false;

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
  
    this.route.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
      }
    )

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.route.queryParams.subscribe(
      (queryParams:Params) => {
        this.allowEditing = queryParams['allowEdit'] === '1' ? true:false;
      }
    )

    this.show = this.allowEditing? this.show : "disabled";


  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.isServerUpdated = true;
    this.router.navigate(['../'], {relativeTo:this.route});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEditing){
      return true;
    }
    if((this.serverName != this.server.name || this.serverStatus != this.server.status) && !this.isServerUpdated){
      return confirm("Do you really want to exit?");
    }else{
      return true;
    }
  }

}
