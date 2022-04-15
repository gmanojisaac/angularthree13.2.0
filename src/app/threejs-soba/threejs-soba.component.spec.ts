import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsSobaComponent } from './threejs-soba.component';

describe('ThreejsSobaComponent', () => {
  let component: ThreejsSobaComponent;
  let fixture: ComponentFixture<ThreejsSobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsSobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
