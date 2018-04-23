import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FadeInAnimationComponent} from './fade-in-animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('FadeInAnimationComponent', () => {
    let component: FadeInAnimationComponent;
    let fixture: ComponentFixture<FadeInAnimationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FadeInAnimationComponent],
            imports: [
                BrowserAnimationsModule,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FadeInAnimationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
