import {Component, Input, OnInit} from '@angular/core';
import {SubMenu} from '../../../@interfaces/menu';

@Component({
    selector: 'app-sub-nav',
    templateUrl: './sub-nav.component.html',
    styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
    subMenuIndex: number;
    @Input() subMenu: SubMenu[];

    constructor() {
    }

    ngOnInit() {
        this.activeSubMenu(0);
    }

    activeSubMenu(i: number): void {
        this.subMenuIndex = i;
    }

}
