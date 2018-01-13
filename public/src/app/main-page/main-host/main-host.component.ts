import {Component, OnInit, OnDestroy} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../@services/user/user.service';
import {User} from '../../@interfaces/user';
import {AuthService} from '../../@services/auth/auth.service';
import {EventsService} from "../../@services/events.service";

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
export class MainHostComponent implements OnInit, OnDestroy {
    anime = '';
    _user: User;

    constructor(private userService: UserService,
                private authService: AuthService,
                private eventsService: EventsService) {
        eventsService.changeEmitted$.subscribe(
            text => {
                console.log(text);
            });
    }

    ngOnInit() {
        this.fadeIn();
        this.initCurrentUser();
    }

    initCurrentUser() {
        this.userService.getCurrentUser().subscribe(
            user => {
                if (user && user._id) {
                    this._user = user;
                    console.log(this._user);
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
    ngOnDestroy() {
        // if (!this.eventsService.changeEmitted$.closed) this.toggleAccess$.unsubscribe();
    }
}
