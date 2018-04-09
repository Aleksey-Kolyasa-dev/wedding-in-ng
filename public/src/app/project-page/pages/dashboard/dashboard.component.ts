import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ProjectMenuService} from '../../../@services/project/project-menu.service';
import {Menu, SubMenu} from '../../../@interfaces/menu';

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
    subMenuConfig: any = {};

    constructor(private projectMenuService: ProjectMenuService) {
    }

    ngOnInit() {
        this.fadeIn();
        this.initSubMenu(0);
    }

    initSubMenu(index: number) {
        this.subMenuConfig = {
            menu: this.projectMenuService.getCurrentMenuItem(),
            subMenu: this.projectMenuService.getSubMenu(index),
        }
    }

    fadeIn() {
        this.anime = 'fadeIn';
    }
}
