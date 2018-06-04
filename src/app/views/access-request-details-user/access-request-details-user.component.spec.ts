import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestDetailsUserComponent } from './access-request-details-user.component';

describe('AccessRequestDetailsUserComponent', () => {
  let component: AccessRequestDetailsUserComponent;
  let fixture: ComponentFixture<AccessRequestDetailsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestDetailsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
