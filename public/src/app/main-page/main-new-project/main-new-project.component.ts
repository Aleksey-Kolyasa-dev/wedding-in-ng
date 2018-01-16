import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../@services/project/project.service';
import {ToastService} from '../../@services/toast.service';
import {Router} from '@angular/router';
import {EventsService} from '../../@services/events.service';

@Component({
    selector: 'app-main-new-project',
    templateUrl: './main-new-project.component.html',
    styleUrls: ['./main-new-project.component.scss']
})
export class MainNewProjectComponent implements OnInit {
    newProjectForm: FormGroup;

    initDate: Date = new Date();
    minDate: Date = new Date();
    selectedDate: Date = new Date();
    bsConfig = {dateInputFormat: 'DD.MM.YYYY'};
    dp: any;


    constructor(private fb: FormBuilder,
                private projectService: ProjectService,
                private toastService: ToastService,
                private router: Router,
                private eventsService: EventsService) {
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.newProjectForm = this.fb.group(
            {
                fiance: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                fiancee: [
                    '',
                    Validators.compose([
                        Validators.required,
                    ]),
                ],
                budgetGenPlanUsd: [
                    '',
                    Validators.compose([
                        Validators.required,
                        Validators.min(500),
                    ]),
                ],
                weddingDate: [
                    '',
                    Validators.compose([
                        Validators.required,
                        // Validators.pattern(DATE_PATTERN),
                    ]),
                ],
                email: [
                    '',
                ],
                telephone: [
                    '',
                ],
                notes: [
                    '',
                ],
            },
        );
    }

    onSubmit({value}) {
        this.projectService.createNewProject(value).subscribe(
            success => {
                this.router.navigate(['../']);
                this.eventsService.emitChange('test');
            },
            error => {
                this.toastService.error(error);
                this.router.navigate(['../']);
            }
        );
    }
}
