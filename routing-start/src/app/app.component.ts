import { Component } from '@angular/core';
import { CommonService } from './shared/app.common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonService]
})
export class AppComponent {

  isValueSet:boolean = false;

  displayVal:CommonService;

  constructor(private common:CommonService){

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
   
  }

}
