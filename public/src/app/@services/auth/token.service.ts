import {Injectable} from '@angular/core';
import {TOKEN} from '../../@constants/api.constants';

@Injectable()
export class TokenService {

    constructor() {
    }

    public isAuthenticated(): boolean {
        return !!localStorage[TOKEN];
    }

    public getToken(): string | boolean {
        return this.isAuthenticated()
            ? localStorage[TOKEN]
            : false;
    }

    public setToken(token: string): void {
        if (token) {
            localStorage.setItem(TOKEN, token);
        }
    }

    public removeToken(): void {
        if (this.isAuthenticated()) {
            localStorage.removeItem(TOKEN);
        }
    }
}
