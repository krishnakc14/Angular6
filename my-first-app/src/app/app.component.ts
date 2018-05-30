import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // oddValues: number[] = [];
  // evenValues: number[] = [];
  featureSelected:String = 'recipe';

  // onEveryFiring(firedNumber:number){
  //   console.log("Fired Number is"+firedNumber);
  //   if(firedNumber %2 != 0){
  //     this.oddValues.push(firedNumber);
  //   }else{
  //     this.evenValues.push(firedNumber)
  //   }
  // }

  onFeatureSelected(feature:String){
    this.featureSelected = feature;
  }
}
