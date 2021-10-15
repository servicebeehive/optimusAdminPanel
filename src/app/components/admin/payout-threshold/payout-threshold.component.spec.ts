import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutThresholdComponent } from './payout-threshold.component';

describe('PayoutThresholdComponent', () => {
  let component: PayoutThresholdComponent;
  let fixture: ComponentFixture<PayoutThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutThresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
