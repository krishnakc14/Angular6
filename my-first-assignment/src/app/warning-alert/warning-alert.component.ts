import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  userName;
  isTextPresent = false;

  constructor() { }

  ngOnInit() {
  }

  onButtonClick()
  {
    if(this.userName){
        this.isTextPresent = true;
    }
    this.userName = "";

  }

}
