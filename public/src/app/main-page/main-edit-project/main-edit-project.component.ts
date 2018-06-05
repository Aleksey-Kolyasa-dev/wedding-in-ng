import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectService} from '../../@services/project/project.service';
import {ToastService} from '../../@services/toast.service';
import {Router} from '@angular/router';
import {EventsService} from '../../@services/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import {Project} from '../../@interfaces/project';

@Component({
  selector: 'app-main-edit-project',
  templateUrl: './main-edit-project.component.html',
  styleUrls: ['./main-edit-project.component.scss']
})
export class MainEditProjectComponent implements OnInit {
    editProjectForm: FormGroup;

    initDate: Date = new Date();
    selectedDate: Date = new Date();
    bsConfig = {dateInputFormat: 'DD.MM.YYYY'};
    dp: any;

    removeTrigger: boolean;
    id: string;

    constructor(private fb: FormBuilder,
                private projectService: ProjectService,
                private toastService: ToastService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private eventsService: EventsService) {
        this.createForm();
    }

    ngOnInit() {
        this.loadProject();
        this.removeTrigger = false;
    }

    createForm() {
        this.editProjectForm = this.fb.group(
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

    loadProject() {
        this.activatedRoute.params.forEach(({id}: Params) => {
            this.projectService.getSingleProject(id).subscribe(
                project => {
                    this.fillInForm(project);
                    this.id = project._id;
                },
                error => {
                    this.router.navigate(['/main']);
                }
            );
        });
    }

    fillInForm({ fiance, fiancee, budgetGenPlanUsd, weddingDate, email, telephone, notes }: Project) {
        this.editProjectForm.patchValue({
            fiance,
            fiancee,
            budgetGenPlanUsd,
            weddingDate: new Date(weddingDate),
            email,
            telephone,
            notes });
    }

    onSubmit({value}) {
        this.projectService.updateProject(this.id, value).subscribe(
            success => {
                this.router.navigate(['../']);
            },
            error => {
                this.router.navigate(['../']);
            }
        );
    }

    removeTriggerToggle(mode: boolean) {
        this.removeTrigger = mode;
    }

    removeConfirm() {
        this.projectService.removeProject(this.id).subscribe(
            success => {
                this.router.navigate(['../']);
            },
            error => {
                this.router.navigate(['../']);
            }
        );
    }


}
