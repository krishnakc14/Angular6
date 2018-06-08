import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-assignemnt',
  templateUrl: './my-assignemnt.component.html',
  styleUrls: ['./my-assignemnt.component.css']
})
export class MyAssignemntComponent implements OnInit {

  formSubmitted = false;
  subscribedTo = 'Pro';
  user = {
    email:'',
    password:'',
    subscription:''
  };
  @ViewChild('assignmentForm') myAssignForm
  constructor() { }

  ngOnInit() {
  }

  onAssignmentSubmit(){
    this.formSubmitted = true;
    this.user.email = this.myAssignForm.value.emailId;
    this.user.password = this.myAssignForm.value.password;
    this.user.subscription = this.subscribedTo;
  }

}
