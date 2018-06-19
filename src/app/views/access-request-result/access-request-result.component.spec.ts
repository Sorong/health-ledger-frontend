import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestResultComponent } from './access-request-result.component';

describe('AccessRequestResultComponent', () => {
  let component: AccessRequestResultComponent;
  let fixture: ComponentFixture<AccessRequestResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
