import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../@services/project/project.service';
import {Project} from '../../@interfaces/project';
import {ToastService} from '../../@services/toast.service';
import * as moment from 'moment';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main-projects-panel',
    templateUrl: './main-projects-panel.component.html',
    styleUrls: ['./main-projects-panel.component.scss'],
})
export class MainProjectsPanelComponent implements OnInit {
    projects: Project[] = [];
    archive: Project[] = [];

    archiveView = false;

    constructor(private projectService: ProjectService,
                private toastService: ToastService,
                private router: Router) {
    }

    ngOnInit() {
        this.loadUserProjects();
    }

    loadUserProjects() {
        this.projectService.getUserProjects().subscribe(
            projects => {
                projects.forEach((project) => {
                    if (!moment().isAfter(project.weddingDate)) {
                        this.projects.push(project);
                    } else {
                        this.archive.push(project);
                    }
                });
            },
            error => {
                this.toastService.error(error);
                this.projects = [];
            }
        );
    }

    showArchive(condition: boolean) {
        this.archiveView = condition;
    }

    goToProject(id: string) {
        this.projectService.setCurrentProjectId(id);
        this.router.navigate([`../project/${id}/dashboard/ddd`]);
    }
}
