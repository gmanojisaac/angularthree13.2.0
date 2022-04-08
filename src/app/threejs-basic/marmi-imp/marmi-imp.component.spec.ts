import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmiImpComponent } from './marmi-imp.component';

describe('MarmiImpComponent', () => {
  let component: MarmiImpComponent;
  let fixture: ComponentFixture<MarmiImpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmiImpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmiImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
