import { Component } from '@angular/core';
import { promise } from 'protractor';


@Component({
    selector: 'app-success',
    templateUrl: './success-component.html'
})

export class successComponent{

    servers = [
        {
          instanceType: 'medium',
          name: 'Production Server',
          status: 'stable',
          started: new Date(15, 1, 2017)
        },
        {
          instanceType: 'large',
          name: 'User Database',
          status: 'stable',
          started: new Date(15, 1, 2017)
        },
        {
          instanceType: 'small',
          name: 'Development Server',
          status: 'offline',
          started: new Date(15, 1, 2017)
        },
        {
          instanceType: 'small',
          name: 'Testing Environment Server',
          status: 'stable',
          started: new Date(15, 1, 2017)
        },
        {
            instanceType: 'small',
            name: 'Testing Environment Server',
            status: 'stablo',
            started: new Date(15, 1, 2017)
          }
      ];
      myInputFilter:string = "";
      getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
        return {
          'list-group-item-success': server.status === 'stable',
          'list-group-item-warning': server.status === 'offline',
          'list-group-item-danger': server.status === 'critical'
        };
      }

      appStatus = new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve('Krish');
          }, 2000);
      } );

}