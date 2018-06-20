import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService{

    constructor(private ht:Http, private httpClient:HttpClient){}

    saveServer(server: any[]){
        console.log("Saving Server");
        console.log(this.httpClient.get('//localhost:8080/recipes'));
        return this.ht.post('',server);
    }

}