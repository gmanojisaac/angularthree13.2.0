import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsBasicComponent } from './threejs-basic.component';

describe('ThreejsBasicComponent', () => {
  let component: ThreejsBasicComponent;
  let fixture: ComponentFixture<ThreejsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreejsBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
