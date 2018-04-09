import {Injectable} from '@angular/core';
import {Menu, SubMenu} from '../../@interfaces/menu';
import {PROJ_MENU_PRO} from '../../@constants/menu.constant';
import {DASHBOARD_SUB_MENU} from '../../@constants/sub-menus.constant';

let currentMenuItem: Menu;

@Injectable()
export class ProjectMenuService {

    constructor() {
    }

    public getProjectMenu(): Menu[] {
        return PROJ_MENU_PRO;
    }

    public getSubMenu(index: number): SubMenu[] {
        switch (index) {
            case 0:
                return DASHBOARD_SUB_MENU;
        }
    }

    public setCurrentMenuItem(menuItem: Menu): void {
        currentMenuItem = menuItem;
    }

    public getCurrentMenuItem(): Menu {
        return currentMenuItem;
    }
}
