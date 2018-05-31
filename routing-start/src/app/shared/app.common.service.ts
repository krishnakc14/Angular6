import { EventEmitter } from "@angular/core";

export class CommonService{

    private name:String;
    private division:String;

    myEmitter = new EventEmitter<CommonService>();

    add(name:String, division:String){
        this.name = name;
        this.division = division;
    }


}