import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarmiRxstateComponent } from './marmi-rxstate.component';

describe('MarmiRxstateComponent', () => {
  let component: MarmiRxstateComponent;
  let fixture: ComponentFixture<MarmiRxstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarmiRxstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarmiRxstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
