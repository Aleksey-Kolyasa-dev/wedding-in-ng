import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AUTH_BASE_URL} from '../../@constants/api.constants';
import {LoginData, RegisterData} from '../../@interfaces/auth';
import {Router} from '@angular/router';
import {ToastService} from '../toast.service';
import {TokenService} from './token.service';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient,
                private router: Router,
                private toastService: ToastService,
                private tokenService: TokenService) {
    }

    doRegister(data: RegisterData): Observable<any> {
        return this.http.post(`${AUTH_BASE_URL}/register`, data);
    }

    doLogin(data: LoginData): Observable<any> {
        return this.http.post(`${AUTH_BASE_URL}/login`, data);
    }

    doLogout({_id}): Observable<any> {
        return this.http.put(`${AUTH_BASE_URL}/logout/${_id}`, null);
    }

    kickOff(silent = false) {
        this.router.navigate(['/auth/login']);
        if (!silent) {
            this.toastService.error(`Unauthorized! \ Не авторизированы!`);
        }
        this.tokenService.removeToken();
        return false;
    }
}
