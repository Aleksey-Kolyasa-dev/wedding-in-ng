import {Component, OnInit} from '@angular/core';
import {User} from '../../../../@interfaces/user';
import {Router} from '@angular/router';
import {TokenService} from '../../../../@services/auth/token.service';
import {AuthService} from '../../../../@services/auth/auth.service';
import {UserService} from '../../../../@services/user/user.service';


@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
   _user: User;

    constructor(private authService: AuthService,
                private userService: UserService,
                private tokenService: TokenService,
                private router: Router) {
    }

    ngOnInit() {
        this.initCurrentUser();
    }

    initCurrentUser() {
        this.userService.getCurrentUser().subscribe(
            user => {
                if (user && user._id) {
                    this._user = user;
                } else {
                    this.authService.kickOff();
                }
            },
            error => {
                this.authService.kickOff();
            }
        );
    }

    logout() {
        this.authService.doLogout(this._user).subscribe(
            (success) => {
                this.tokenService.removeToken();
                this.router.navigate(['/auth/login']);
            },
            (error) => {
                this.authService.kickOff(true);
            }
        );
    }
}

