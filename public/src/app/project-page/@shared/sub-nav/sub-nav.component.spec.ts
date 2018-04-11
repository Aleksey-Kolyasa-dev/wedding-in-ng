import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { SubNavComponent } from './sub-nav.component';
import {TranslateModule} from '@ngx-translate/core';

describe('SubNavComponent', () => {
  let component: SubNavComponent;
  let fixture: ComponentFixture<SubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavComponent ],
        imports: [
            RouterTestingModule,
            TranslateModule.forRoot(),
        ],
        providers: [
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  // TODO: to-fix
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
