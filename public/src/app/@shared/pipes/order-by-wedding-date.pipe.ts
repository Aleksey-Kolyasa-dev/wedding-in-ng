import {Pipe, PipeTransform} from '@angular/core';
import {Project} from '../../@interfaces/project';

@Pipe({
    name: 'orderByWeddingDate'
})
export class OrderByWeddingDatePipe implements PipeTransform {
    transform(projects: Project[], args?: string): Project[] {
        projects.sort((a: any, b: any) => {
            if (a.weddingDate < b.weddingDate) {
                return -1;
            } else if (a.weddingDate > b.weddingDate) {
                return 1;
            } else {
                return 0;
            }
        });
        return projects;
    }
}
