import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxstatePresenterComponent } from './rxstate-presenter.component';

describe('RxstatePresenterComponent', () => {
  let component: RxstatePresenterComponent;
  let fixture: ComponentFixture<RxstatePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxstatePresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxstatePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
