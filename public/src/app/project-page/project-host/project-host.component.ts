import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {UserService} from '../../@services/user/user.service';
import {AuthService} from '../../@services/auth/auth.service';
import {EventsService} from '../../@services/events.service';
import {User} from '../../@interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../@services/project/project.service';

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
                private eventsService: EventsService,
                private route: ActivatedRoute,
                private router: Router,
                private projectService: ProjectService) {
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
        this.setCurrentProjectId();
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

    setCurrentProjectId() {
        this.route.params.forEach(param => {
            if (param && param.id) {
                this.projectService.setCurrentProjectId(param.id);
            }
        });
    }

    backToProjects() {
        this.router.navigate(['/main']);
        this.projectService.setCurrentProjectId(null);
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
