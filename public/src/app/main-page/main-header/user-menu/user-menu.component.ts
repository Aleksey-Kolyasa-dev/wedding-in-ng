import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../@interfaces/user';
import {Router} from '@angular/router';
import {TokenService} from '../../../@services/auth/token.service';
import {AuthService} from '../../../@services/auth/auth.service';


@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
    @Input() _user: User;

    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    ngOnInit() {
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

