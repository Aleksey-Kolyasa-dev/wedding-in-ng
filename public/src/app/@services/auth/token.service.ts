import { Injectable } from '@angular/core';
import {TOKEN} from '../../@constants/api.constants';

@Injectable()
export class TokenService {

  constructor() { }

  public isTokenSet(): boolean {
    return !!localStorage[TOKEN];
  }

  public getToken(): any {
    return this.isTokenSet()
      ? localStorage[TOKEN]
      : false;
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

