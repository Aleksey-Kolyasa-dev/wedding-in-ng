import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../@services/user/user.service';
import {User} from '../../@interfaces/user';
import {AuthService} from '../../@services/auth/auth.service';

@Component({
    selector: 'app-main-host',
    templateUrl: './main-host.component.html',
    styleUrls: ['./main-host.component.scss'],
    animations: [
        trigger('fadeInOnInit', [
            transition('* => fadeIn', [
                style({opacity: 0}),
                animate(500, style({opacity: 1}))
            ]),
            transition('* => fadeOut', [
                animate(400, style({opacity: 0}))
            ])
        ])
    ],
})
export class MainHostComponent implements OnInit {
    anime = '';
    _user: User;

    constructor(private userService: UserService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.fadeIn();
        this.initCurrentUser();
    }

    initCurrentUser() {
        this.userService.getCurrentUser().subscribe(
            user => {
                if (user && user._id) {
                    console.log(user);
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

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
