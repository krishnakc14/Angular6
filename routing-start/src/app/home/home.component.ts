import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { CommonService } from '../shared/app.common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() value:String;

  constructor(private common:CommonService, private router:Router) { }

  ngOnInit() {
  }

  onClick(name:HTMLInputElement){
    this.router.navigate(['servers']);
    this.common.add(name.value, "One");
    this.common.myEmitter.emit(this.common);
  }

}
