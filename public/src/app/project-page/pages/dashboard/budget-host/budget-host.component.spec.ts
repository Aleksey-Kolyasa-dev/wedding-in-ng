import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BudgetHostComponent} from './budget-host.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRoute, Data, Params, Route, Router} from "@angular/router";




describe('BudgetHostComponent', () => {
    let component: BudgetHostComponent;
    let fixture: ComponentFixture<BudgetHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BudgetHostComponent],
            imports: [
                RouterTestingModule,
                TranslateModule.forRoot(),
            ],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [
                ActivatedRoute,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BudgetHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO:
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
