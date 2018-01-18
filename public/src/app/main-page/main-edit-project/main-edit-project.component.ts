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
    minDate: Date = new Date();
    selectedDate: Date = new Date();
    bsConfig = {dateInputFormat: 'DD.MM.YYYY'};
    dp: any;


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

    loadProject() {
        this.activatedRoute.params.forEach(({id}: Params) => {
           this.projectService.getSingleProject(id).subscribe(
               project => {
                   this.fillInForm(project);
               },
               error => {
                   this.router.navigate(['/main']);
               }
           );
        });
    }

    onSubmit({value}) {
        this.projectService.createNewProject(value).subscribe(
            success => {
                this.router.navigate(['../']);
                this.toastService.success(' ');
                this.eventsService.emitChange('test');
            },
            error => {
                this.toastService.error(error);
                this.router.navigate(['../']);
            }
        );
    }
}
