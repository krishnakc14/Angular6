import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-assignment',
  templateUrl: './my-reactive-assignment.component.html',
  styleUrls: ['./my-reactive-assignment.component.css']
})
export class MyReactiveAssignmentComponent implements OnInit {

  myFormData:FormGroup;

  constructor() { }

  ngOnInit() {
    this.myFormData = new FormGroup({
      'name':new FormControl(null, [Validators.required, this.myValidator.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(null)
    });
  }

  onFormSubmit(){
    console.log(this.myFormData);
  }

  myValidator(control:FormControl){
    if(control.value === 'test'){
      return {isNameValid:false}
    } 
      return null;
    
  }

}
