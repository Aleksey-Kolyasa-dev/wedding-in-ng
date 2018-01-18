import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../@services/project/project.service';
import {Project} from '../../@interfaces/project';
import {ToastService} from '../../@services/toast.service';

@Component({
    selector: 'app-main-projects-panel',
    templateUrl: './main-projects-panel.component.html',
    styleUrls: ['./main-projects-panel.component.scss'],
})
export class MainProjectsPanelComponent implements OnInit {
    projects: Project[] = [];

    constructor(private projectService: ProjectService,
                private toastService: ToastService) {
    }

    ngOnInit() {
        this.loadUserProjects();
    }

    loadUserProjects() {
        this.projectService.getUserProjects().subscribe(
            projects => {
                this.projects = projects;
            },
            error => {
                this.toastService.error(error);
                this.projects = [];
            }
        );
    }
}
