import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubespotlightComponent } from './cubespotlight.component';

describe('CubespotlightComponent', () => {
  let component: CubespotlightComponent;
  let fixture: ComponentFixture<CubespotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubespotlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubespotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
