import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../@services/auth/auth.service';
import {TokenService} from '../../@services/auth/token.service';
import {User} from '../../@interfaces/user';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
    @Input() user: User;

    constructor(private authService: AuthService,
                private tokenService: TokenService,
                private router: Router) {
    }

    ngOnInit() {
    }

    logout() {

        this.authService.doLogout(this.user).subscribe(
            (success) => {
                this.tokenService.removeToken();
                this.router.navigate(['/auth/login']);
            },
            (error) => {
            }
        );


    }
}
