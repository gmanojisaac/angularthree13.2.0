import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonClumpComponent } from './cannon-clump.component';

describe('CannonClumpComponent', () => {
  let component: CannonClumpComponent;
  let fixture: ComponentFixture<CannonClumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonClumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonClumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
