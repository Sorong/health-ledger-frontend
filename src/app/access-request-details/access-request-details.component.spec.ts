import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestDetailsComponent } from './access-request-details.component';

describe('AccessRequestDetailsComponent', () => {
  let component: AccessRequestDetailsComponent;
  let fixture: ComponentFixture<AccessRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
