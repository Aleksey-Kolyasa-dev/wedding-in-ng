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
import {AuthService} from './auth.service';
import {ToastService} from '../toast.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(public tokenService: TokenService,
                private router: Router,
                private authService: AuthService,
                private toastService: ToastService) {
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

                switch (err.status) {
                    case 401:
                        this.authService.kickOff();
                        break;
                    case 403:
                        this.toastService.error(`Forbidden! \ Доступ запрещен!`);
                        break;
                    case 404:
                        this.toastService.error(`Not found! \ Не найдено!`);
                        break;
                    case 500:
                        this.toastService.error(`Server error! \ Ошибка на сервере!`);
                        break;
                    default:
                        this.toastService.error(err);
                        break;
                }
            }
        });
    }
}
