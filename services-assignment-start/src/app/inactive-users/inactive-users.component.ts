import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{

constructor(private userService:UsersService){}

ngOnInit(){
  this.users = this.userService.inactiveUsers;
}

  users: string[];

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
  }
}
