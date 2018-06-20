import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { tap } from "rxjs/operators";


export class LoggingInterceptor implements HttpInterceptor{

    constructor(){}

    intercept(request: HttpRequest<any>, next:HttpHandler) {

        console.log('Intercepting Logger...');
        return next.handle(request).pipe(
            tap(
                event => {console.log('Logging Event', event)},
                error => {console.log('Error ', error)}
            )
        );
    }

}