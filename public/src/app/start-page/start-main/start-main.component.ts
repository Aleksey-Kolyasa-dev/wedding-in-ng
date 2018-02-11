import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-start-main',
    templateUrl: './start-main.component.html',
    styleUrls: ['./start-main.component.scss'],
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
export class StartMainComponent implements OnInit {
    anime = '';
    user: object = {};
    constructor() {
    }

    ngOnInit() {
        this.fadeIn();
        this.user = {_id : 'ss'};
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }

}
