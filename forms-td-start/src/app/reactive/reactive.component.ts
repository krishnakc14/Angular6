import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  myForm:FormGroup;

  genders = ['Male', 'Female'];

  forbiddennames = ['Anna', 'Bella'];
  forbiddenName = false;

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup(
      {'userData': new FormGroup(
        {'username': new FormControl(null, this.forbiddenCheck.bind(this)),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }) ,
      'gender': new FormControl(null),
      'hobby': new FormArray([])
    }, 
    );
  }

  onSubmit(){
    console.log(this.myForm);
  }

  onAddHobby(){
    const ctrl = new FormControl(null, Validators.required);
    (<FormArray>this.myForm.get('hobby')).push(ctrl);
  }

  forbiddenCheck(control:FormControl){
    if(this.forbiddennames.indexOf(control.value) !== -1){
      return {forbiddenName:true};
    }
    return null;
  }

}
