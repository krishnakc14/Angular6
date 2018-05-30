import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  isEvent:boolean = false;
  interval;
  @Output() intervalFIred = new EventEmitter<number>();
  lastNumber = 0;

  constructor() { }

  ngOnInit() {
  }

  startGame(){
    console.log("I reached here")!

    this.interval = setInterval(() => {
      this.intervalFIred.emit(this.lastNumber + 1);
      this.lastNumber++;

      if(this.lastNumber %2 != 0){
        this.isEvent = true;
      }else{
        this.isEvent = false;
      }


    }, 1000);

   
  }

  EndGame(){
    clearInterval(this.interval);
  }



}
