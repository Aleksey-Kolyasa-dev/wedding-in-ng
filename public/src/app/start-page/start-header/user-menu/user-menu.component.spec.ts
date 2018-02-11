import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMenuComponent } from './user-menu.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../../@shared/shared.module';


describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            SharedModule,
            TranslateModule.forChild(),
        ],
        declarations: [UserMenuComponent],
        schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
