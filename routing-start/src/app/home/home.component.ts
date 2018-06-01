import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CommonService } from '../shared/app.common.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() value:String;

  constructor(private common:CommonService, private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onClick(name:HTMLInputElement){
    this.router.navigate(['servers', '2']);
    this.common.add(name.value, "One");
    this.common.myEmitter.emit(this.common);
  }

  onLogin(){
    this.authService.login();
    this.router.navigate(['/servers']);
  }

  onLogout(){
    this.authService.logout();
  }

}
