import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsGradientComponent } from './abs-gradient.component';

describe('AbsGradientComponent', () => {
  let component: AbsGradientComponent;
  let fixture: ComponentFixture<AbsGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbsGradientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
