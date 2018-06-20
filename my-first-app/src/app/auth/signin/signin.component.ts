import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isAuthSuccess = true;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSignIn(myForm:NgForm){
    this.authService.signIn(myForm.value.email, myForm.value.password);
    
  }

}
