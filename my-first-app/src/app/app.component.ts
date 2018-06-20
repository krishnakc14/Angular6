import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAOZT1Hj0RTPxkEK944TSngNK4GumTKHlg",
      authDomain: "ng-recipe-book-29ced.firebaseapp.com"
    });


    // const myObservable = Observable.create(
    //   (observer:Observer<string>) => {
    //     setTimeout(() => {
    //       observer.next('First package');
    //     }, 2000);
    //     setTimeout(() => {
    //       console.log('Second Package!');
    //     }, 4000);
    //     setTimeout(() => {
    //     //  observer.error('Go Home Bud!')
    //     observer.complete();
    //     }, 5000);
    //   }
    // );

    // const myANotherObservable = Observable.create(
    //   (observer:Observer<string>) => {
    //    observer.next('Hurray Baby Hurray!');
    //    observer.next('Hurray Baby Hurray dobara!');
    //    setTimeout(() => {
    //     console.log('Yo yoo Package!');
    //   }, 4000);
    //    observer.error('Errorrr');
    //    observer.complete();

    //   }
    // );

    // myANotherObservable.subscribe(
    //   (myStr:string) => {console.log(myStr); },
    //   (myErr:string) => {console.log(myErr); },
    //   () => {console.log('All is over')}
    // )


    // myObservable.subscribe(
    //   (response:string) => { console.log(response); },
    //   (error:string) => { console.log(error); },
    //   () => { console.log('Its Over ! '); }
    // )

  }

  // oddValues: number[] = [];
  // evenValues: number[] = [];
 

  // onEveryFiring(firedNumber:number){
  //   console.log("Fired Number is"+firedNumber);
  //   if(firedNumber %2 != 0){
  //     this.oddValues.push(firedNumber);
  //   }else{
  //     this.evenValues.push(firedNumber)
  //   }
  // }


  featureSelected:String = 'recipe';
  
  onFeatureSelected(feature:String){
    this.featureSelected = feature;
  }
}
