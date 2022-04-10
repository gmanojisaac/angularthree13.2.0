import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxstateExampleComponent } from './rxstate-example.component';

describe('RxstateExampleComponent', () => {
  let component: RxstateExampleComponent;
  let fixture: ComponentFixture<RxstateExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxstateExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxstateExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
