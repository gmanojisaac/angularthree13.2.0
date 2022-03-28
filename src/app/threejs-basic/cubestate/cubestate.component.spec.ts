import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubestateComponent } from './cubestate.component';

describe('CubestateComponent', () => {
  let component: CubestateComponent;
  let fixture: ComponentFixture<CubestateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubestateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubestateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
