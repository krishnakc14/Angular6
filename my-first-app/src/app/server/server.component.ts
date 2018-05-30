import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})



export class serverComponent{

    serverId = 4200;
    serverStatus = "Online";
    isNextValue = true;
    buttonClick = 0;
    timeValue;
    logArray = [];

    getServerStatus()
    {
        return this.serverStatus;
    }

    onButtonClick()
    {
        this.isNextValue = !this.isNextValue;
        this.buttonClick++;
        this.timeValue = new Date();
        this.logArray.push(this.buttonClick);
    }
}