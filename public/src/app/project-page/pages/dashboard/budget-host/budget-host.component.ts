import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from "../../../../@services/project/project.service";

@Component({
    selector: 'app-budget-host',
    templateUrl: './budget-host.component.html',
    styleUrls: ['./budget-host.component.scss']
})
export class BudgetHostComponent implements OnInit {
    projectId: string;

    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
    }

    ngOnInit() {
        this.getProjectId();
    }

    getProjectId() {
        this.route.parent.parent.parent.params.subscribe(
            params => {
                this.projectId = params['id'];
                this.projectService.setCurrentProjectId(params['id']);
            }
        ).unsubscribe();
    }
}
