import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../@services/user/user.service';
import {AuthService} from '../../@services/auth/auth.service';
import {EventsService} from '../../@services/events.service';

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
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
