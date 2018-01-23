import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {USER_BASE_URL} from '../../@constants/api.constant';


@Injectable()
export class UserService {
    currentUser: object;

    constructor(private http: HttpClient ) {
    }

    getCurrentUser(): Observable<any> {
        return this.http.get(`${USER_BASE_URL}/current`).map(
            (user) => {
                this.currentUser = user;
                return user;
            }
        );
    }

    getUser(id: string): Observable<any> {
        return this.http.get(`${USER_BASE_URL}/${id}`);
    }

}
