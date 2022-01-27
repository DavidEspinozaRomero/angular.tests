import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private auth: AuthService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        // if (this.auth.currentUser && this.auth.currentUser.token) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${this.auth.currentUser.token}`
        //         }
        //     });
        // }
        return next.handle(request);
    }
}
