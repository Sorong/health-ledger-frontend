import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartRecipeDetailsComponent } from './smart-recipe-details.component';

describe('SmartRecipeDetailsComponent', () => {
  let component: SmartRecipeDetailsComponent;
  let fixture: ComponentFixture<SmartRecipeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartRecipeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartRecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
