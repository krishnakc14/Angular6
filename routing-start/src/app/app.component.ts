import { Component } from '@angular/core';
import { CommonService } from './shared/app.common.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent {

  isValueSet:boolean = false;

  displayVal:CommonService;

  userActivated = false;

  constructor(private common:CommonService, private usersService:UsersService){

  }

  ngOnInit() {

    this.common.add("Initial Value","Hurray");

    this.displayVal = this.common;

     this.common.myEmitter.subscribe(
       (myVal:CommonService) => {
         this.displayVal = myVal;
         this.isValueSet = true;
       }
     );

     this.usersService.mySubject.subscribe(
       (id:number) => {
         if(id === 1){
           this.userActivated = true;
         }
       }
     )
   
  }

}
