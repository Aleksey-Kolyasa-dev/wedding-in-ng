import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginData, RegisterData} from '../../@interfaces/auth';
import {Observable} from 'rxjs/Observable';
import {AUTH_BASE_URL} from '../../@constants/api.constants';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    doRegister(data: RegisterData): Observable<any> {
        return this.http.post(`${AUTH_BASE_URL}/register`, data);
    }

    doLogin(data: LoginData): Observable<any> {
        return this.http.post(`${AUTH_BASE_URL}/login`, data);
    }
}
