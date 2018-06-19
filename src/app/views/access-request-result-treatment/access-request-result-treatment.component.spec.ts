import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestResultTreatmentComponent } from './access-request-result-treatment.component';

describe('AccessRequestResultTreatmentComponent', () => {
  let component: AccessRequestResultTreatmentComponent;
  let fixture: ComponentFixture<AccessRequestResultTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestResultTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestResultTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
