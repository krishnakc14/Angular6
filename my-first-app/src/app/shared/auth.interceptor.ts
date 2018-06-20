import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";


export class AuthInterceptor implements HttpInterceptor {

    constructor(){}

    intercept(req: HttpRequest<any>, next:HttpHandler){

        console.log('Intercepting...');
        const clonedReq = req.clone(
            {headers: req.headers.set('content-type', 'Application.JSON')});

        return next.handle(clonedReq);
    }

}