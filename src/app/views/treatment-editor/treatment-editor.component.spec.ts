import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentEditorComponent } from './treatment-editor.component';

describe('TreatmentEditorComponent', () => {
  let component: TreatmentEditorComponent;
  let fixture: ComponentFixture<TreatmentEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
