import { Injectable } from '@angular/core';
import {Menu, SubMenu} from '../../@interfaces/menu';
import {PROJ_MENU_PRO} from '../../@constants/menu.constant';
import {DASHBOARD_SUB_MENU} from '../../@constants/sub-menus.constant';

@Injectable()
export class ProjectMenuService {

  constructor() { }

  public getProjectMenu(): Menu[] {
    return PROJ_MENU_PRO;
  }

  public getSubMenu(index: number): SubMenu[] {
    switch (index) {
        case 0: return DASHBOARD_SUB_MENU;
    }
  }
}
