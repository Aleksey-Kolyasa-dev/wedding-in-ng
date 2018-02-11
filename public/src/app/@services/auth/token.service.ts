import {Injectable} from '@angular/core';
import {TOKEN} from '../../@constants/api.constants';
import {AuthService} from './auth.service';

@Injectable()
export class TokenService {

    constructor(private authService: AuthService) {
    }

    public isTokenSet(): boolean {
        return !!localStorage[TOKEN];
    }

    public getToken(): string | boolean {
        if (this.isTokenSet()) {
            return localStorage[TOKEN];
        } else {
            return this.authService.kickOff();
        }
    }

    public setToken(token: string): void {
        if (token) {
            localStorage.setItem(TOKEN, token);
        }
    }

    public removeToken(): void {
        if (this.isTokenSet()) {
            localStorage.removeItem(TOKEN);
        }
    }
}
