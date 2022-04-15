import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfDetailedComponent } from './perf-detailed.component';

describe('PerfDetailedComponent', () => {
  let component: PerfDetailedComponent;
  let fixture: ComponentFixture<PerfDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfDetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
