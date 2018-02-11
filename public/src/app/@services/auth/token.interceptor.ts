import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {TokenService} from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public tokenService: TokenService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.tokenService.getToken()}`
            }
        });

        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                console.log('HTTP EVENT (interceptor)', event);
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.tokenService.removeToken();
                    this.router.navigate(['/auth/login']);
                }
            }
        });
    }
}
