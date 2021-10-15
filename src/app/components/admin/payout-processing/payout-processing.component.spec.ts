import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutProcessingComponent } from './payout-processing.component';

describe('PayoutProcessingComponent', () => {
  let component: PayoutProcessingComponent;
  let fixture: ComponentFixture<PayoutProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayoutProcessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
