import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavComponent } from './sub-nav.component';
import {TranslateModule} from '@ngx-translate/core';
import {ProjectMenuService} from '../../../../@services/project/project-menu.service';

describe('SubNavComponent', () => {
  let component: SubNavComponent;
  let fixture: ComponentFixture<SubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavComponent ],
        imports: [
            TranslateModule.forRoot(),
        ],
        providers: [
          ProjectMenuService,
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
