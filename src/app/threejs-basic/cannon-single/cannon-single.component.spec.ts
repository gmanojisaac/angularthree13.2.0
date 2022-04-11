import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannonSingleComponent } from './cannon-single.component';

describe('CannonSingleComponent', () => {
  let component: CannonSingleComponent;
  let fixture: ComponentFixture<CannonSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CannonSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CannonSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
