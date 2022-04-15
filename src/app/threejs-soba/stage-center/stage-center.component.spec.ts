import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageCenterComponent } from './stage-center.component';

describe('StageCenterComponent', () => {
  let component: StageCenterComponent;
  let fixture: ComponentFixture<StageCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
