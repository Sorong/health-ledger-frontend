import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRequestTreatmentEditorComponent } from './access-request-treatment-editor.component';

describe('AccessRequestTreatmentEditorComponent', () => {
  let component: AccessRequestTreatmentEditorComponent;
  let fixture: ComponentFixture<AccessRequestTreatmentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessRequestTreatmentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessRequestTreatmentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
