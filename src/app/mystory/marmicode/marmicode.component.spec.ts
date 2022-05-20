import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmicodeComponent } from './marmicode.component';

describe('MarmicodeComponent', () => {
  let component: MarmicodeComponent;
  let fixture: ComponentFixture<MarmicodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmicodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmicodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
