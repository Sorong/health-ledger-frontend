import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapyDetailsComponent } from './therapy-details.component';

describe('TherapyDetailsComponent', () => {
  let component: TherapyDetailsComponent;
  let fixture: ComponentFixture<TherapyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
