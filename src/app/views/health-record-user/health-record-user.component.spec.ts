import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRecordUserComponent } from './health-record-user.component';

describe('HealthRecordUserComponent', () => {
  let component: HealthRecordUserComponent;
  let fixture: ComponentFixture<HealthRecordUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthRecordUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthRecordUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
