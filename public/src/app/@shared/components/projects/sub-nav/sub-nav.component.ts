import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sub-nav',
    templateUrl: './sub-nav.component.html',
    styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
    subMenuIndex: number;
    subMenu = [
        { name: 'PROJ.dashboard.subMenu[0].name'},
        { name: 'PROJ.dashboard.subMenu[1].name'},
        { name: 'PROJ.dashboard.subMenu[2].name'},
        { name: 'PROJ.dashboard.subMenu[3].name'},
    ];

    constructor() {
    }

    ngOnInit() {
        this.activeSubMenu(0);
    }

    activeSubMenu(i: number): void {
        this.subMenuIndex = i;
    }
}
