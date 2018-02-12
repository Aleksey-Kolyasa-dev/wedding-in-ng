import {Injectable} from '@angular/core';
import {TOKEN} from '../../@constants/api.constants';

@Injectable()
export class TokenService {

    constructor() {
    }

    public isTokenSet(): boolean {
        return !!localStorage[TOKEN];
    }

    public getToken(): string | boolean {
        return this.isTokenSet()
            ? localStorage[TOKEN]
            : false;
    }

    public setToken(token: string): void {
        token
            ? localStorage.setItem(TOKEN, token)
            : this.stub();
    }

    public removeToken(): void {
        this.isTokenSet()
            ? localStorage.removeItem(TOKEN)
            : this.stub();
    }

    private stub() {
        return null;
    }
}
