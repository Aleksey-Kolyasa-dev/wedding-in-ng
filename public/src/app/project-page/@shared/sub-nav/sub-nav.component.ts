import {Component, OnInit} from '@angular/core';
import {ProjectMenuService} from '../../../@services/project/project-menu.service';
import {SubMenu} from '../../../@interfaces/menu';

@Component({
    selector: 'app-sub-nav',
    templateUrl: './sub-nav.component.html',
    styleUrls: ['./sub-nav.component.scss']
})
export class SubNavComponent implements OnInit {
    subMenuIndex: number;
    subMenu: SubMenu[];

    constructor(private projectMenuService: ProjectMenuService) {
    }

    ngOnInit() {
        this.activeSubMenu(0);
        this.initSubMenu(0);
    }

    activeSubMenu(i: number): void {
        this.subMenuIndex = i;
    }

    initSubMenu(index: number) {
        this.subMenu = this.projectMenuService.getSubMenu(index);
    }
}
