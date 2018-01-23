import { Injectable } from '@angular/core';
import {PROJ_MENU_PRO} from '../../@constants/menu.constant';

@Injectable()
export class ProjectMenuService {

  constructor() { }

  public getProjectMenu(): any[] {
    return PROJ_MENU_PRO;
  }
}
