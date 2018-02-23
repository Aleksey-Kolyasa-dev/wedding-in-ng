import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';
import {HEADER_TOKEN} from '../../@constants/api.constants';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService,
                private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = {
            headers: request.headers.set(HEADER_TOKEN, this.tokenService.getToken()),
        };

        return next.handle(request.clone(this.tokenService.isTokenSet() ? token : {})).do(
            (event: HttpEvent<any>) => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.tokenService.removeToken();
                        this.router.navigate(['/index']);
                    }
                }
            }
        );
    }
}
