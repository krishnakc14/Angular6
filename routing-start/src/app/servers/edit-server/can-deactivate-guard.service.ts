import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";

export interface canComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDeactivateGuard implements CanDeactivate<canComponentDeactivate>{

    canDeactivate(component:canComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentstate: RouterStateSnapshot,
                nextState ?: RouterStateSnapshot) {
                    return component.canDeactivate();
                }
}