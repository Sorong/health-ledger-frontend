import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickNoteOverviewComponent } from './sick-note-overview.component';

describe('SickNoteOverviewComponent', () => {
  let component: SickNoteOverviewComponent;
  let fixture: ComponentFixture<SickNoteOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickNoteOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickNoteOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
