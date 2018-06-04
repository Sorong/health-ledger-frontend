import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartRecipeOverviewComponent } from './smart-recipe-overview.component';

describe('SmartRecipeOverviewComponent', () => {
  let component: SmartRecipeOverviewComponent;
  let fixture: ComponentFixture<SmartRecipeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartRecipeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartRecipeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
