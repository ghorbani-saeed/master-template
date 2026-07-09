import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowButton } from './normal-button';

describe('ArrowButton', () => {
  let component: ArrowButton;
  let fixture: ComponentFixture<ArrowButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowButton],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
