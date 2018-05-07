import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CurrencyModalComponent} from './currency-modal/currency-modal.component';
import {ProjectService} from "../../../../../@services/project/project.service";
import {Project} from "../../../../../@interfaces/project";

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

    @Input() projectId;
    project: Project;

    constructor(private modalService: NgbModal,
                private projectService: ProjectService) {
    }

    ngOnInit() {
        this.getProjectData();
    }

    getProjectData() {
        this.projectService.getProject(this.projectId).subscribe(
            project => {
                this.project = project;
            }
        )
    }

    setCurrency() {
        this.modalService
            .open(CurrencyModalComponent, {
                size: 'sm',
            })
            .result.then((data) => {
            console.log(data);
        })
            .catch((error) => {
                console.log(error);
            });
    }

}
