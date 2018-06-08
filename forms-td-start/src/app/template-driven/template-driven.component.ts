import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  constructor(private router:Router, private route:ActivatedRoute){

  }

  @ViewChild('myForm') myForm:NgForm;
  genders =['Male', 'Female'];
  user = {
    username:'',
    email:'',
    secretQues:'',
    gender:''
  };
  isSubmitted = false;
 

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.myForm.form.patchValue({
      username:suggestedName  
    });
  }

  onSubmit(){
    this.isSubmitted = true;
    this.user.username = this.myForm.value.username;
    this.user.email = this.myForm.value.email;
    this.user.secretQues = this.myForm.value.secret;
    this.user.gender = this.myForm.value.gender;
    console.log(this.myForm);
  }

  onButtonClick(){
    this.router.navigate(['my-assignment']);
  }
}
