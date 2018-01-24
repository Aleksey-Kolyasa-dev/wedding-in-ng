import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
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
export class DashboardComponent implements OnInit {
    anime = '';

    constructor() {
    }

    ngOnInit() {
        this.fadeIn();
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
