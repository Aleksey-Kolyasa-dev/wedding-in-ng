import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {TokenService} from '../../@services/auth/token.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-start-main',
    templateUrl: './start-host.component.html',
    styleUrls: ['./start-host.component.scss'],
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
export class StartHostComponent implements OnInit {
    anime = '';

    constructor(private tokenService: TokenService,
                private router: Router) {
    }

    ngOnInit() {
        this.isLoggedIn();
    }

    isLoggedIn() {
        this.tokenService.isTokenSet()
            // ? this.router.navigate(['/main'])
            ? this.router.navigate(['/project/5a5e59ee0d84ab25442489f9/dashboard'])
            : this.fadeIn();
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }

}
