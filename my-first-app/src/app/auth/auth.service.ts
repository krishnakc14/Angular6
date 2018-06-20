import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    myToken:string;

    constructor(private router:Router){}

    signUp(email:string, password:string){

        firebase.auth().createUserWithEmailAndPassword(email,password).then(
            event => console.log("This is the Auth Event "+ event),
            error => console.log("I got an error "+ error)
        );
    }

    signIn(email:string, password:string){
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email,password).then(
            response => {
                console.log(response); 
                this.router.navigate(['/recipes'])
                firebase.auth().currentUser.getIdToken().then(
                    (token:string) => this.myToken = token
                )
            }
        ).catch(
            error => console.log(error)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken().then(
            (token:string) => this.myToken = token
        )
        return this.myToken;
    }

    isAuthenticated(){
        return this.myToken != null;
    }

    onLogout(){
        firebase.auth().signOut();
        this.myToken = null;
        this.router.navigate(['/signIn']);
    }


}