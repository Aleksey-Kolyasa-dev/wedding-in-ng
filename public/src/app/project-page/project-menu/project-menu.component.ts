import {Component, OnInit} from '@angular/core';
import {ProjectMenuService} from '../../@services/project/project-menu.service';

@Component({
    selector: 'app-project-menu',
    templateUrl: './project-menu.component.html',
    styleUrls: ['./project-menu.component.scss']
})
export class ProjectMenuComponent implements OnInit {
    menuIndex: number;
    menu: any[];

    constructor(private projectMenuService: ProjectMenuService) {
    }

    ngOnInit() {
        this.initMenu();
        this.activeMenu(0);
    }

    initMenu() {
        this.menu = this.projectMenuService.getProjectMenu();
    }

    activeMenu(i: number): void {
        this.menuIndex = i;
    }
}
