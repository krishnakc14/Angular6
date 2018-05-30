import { Component } from '@angular/core';
import { UsersService } from './UsersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService:UsersService){}

  activeUsers = this.userService.activeUsers;

  inactiveUsers = this.userService.inactiveUsers;

}
