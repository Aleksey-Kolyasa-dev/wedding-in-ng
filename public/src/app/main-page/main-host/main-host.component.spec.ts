import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainHostComponent } from './main-host.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('MainHostComponent', () => {
    let component: MainHostComponent;
    let fixture: ComponentFixture<MainHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserAnimationsModule,
            ],
            declarations: [ MainHostComponent ],
            schemas: [NO_ERRORS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MainHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
