import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmiReactComponent } from './marmi-react.component';

describe('MarmiReactComponent', () => {
  let component: MarmiReactComponent;
  let fixture: ComponentFixture<MarmiReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmiReactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmiReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
