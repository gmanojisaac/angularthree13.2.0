import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubelightComponent } from './cubelight.component';

describe('CubelightComponent', () => {
  let component: CubelightComponent;
  let fixture: ComponentFixture<CubelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubelightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
