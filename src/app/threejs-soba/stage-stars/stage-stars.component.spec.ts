import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageStarsComponent } from './stage-stars.component';

describe('StageStarsComponent', () => {
  let component: StageStarsComponent;
  let fixture: ComponentFixture<StageStarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageStarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageStarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
