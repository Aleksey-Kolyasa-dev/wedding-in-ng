import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../@services/user/user.service';
import {AuthService} from '../../@services/auth/auth.service';
import {EventsService} from '../../@services/events.service';
import {User} from '../../@interfaces/user';

@Component({
    selector: 'app-project-host',
    templateUrl: './project-host.component.html',
    styleUrls: ['./project-host.component.scss'],
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
export class ProjectHostComponent implements OnInit {
    anime = '';
    _user: User;
    constructor(private userService: UserService,
                private authService: AuthService,
                private eventsService: EventsService) {
        // TODO:
        eventsService.eventListener$.subscribe(
            data => {
                // console.log(data);
                // this.initCurrentUser();
            }).unsubscribe();
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
