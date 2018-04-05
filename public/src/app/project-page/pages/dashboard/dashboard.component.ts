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
    // subMenu = [
    //     { name: 'PROJ.dashboard.subMenu[0].name'},
    //     { name: 'PROJ.dashboard.subMenu[1].name'},
    //     { name: 'PROJ.dashboard.subMenu[2].name'},
    //     { name: 'PROJ.dashboard.subMenu[3].name'},
    // ];

    constructor() {
    }

    ngOnInit() {
        this.fadeIn();
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
