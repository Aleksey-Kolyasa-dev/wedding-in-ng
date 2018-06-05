import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {ProjectService} from '../../project/project.service';


@Injectable()
export class ProjectHostGuard implements CanActivate {
    constructor(private projectService: ProjectService) {
    }

    canActivate(route): any {
        return this.projectService.getSingleProject(route.params['id']).map(
            project => {
                return !!project._id;
            },
        );
    }
}
