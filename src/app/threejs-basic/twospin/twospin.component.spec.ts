import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwospinComponent } from './twospin.component';

describe('TwospinComponent', () => {
  let component: TwospinComponent;
  let fixture: ComponentFixture<TwospinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwospinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwospinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
