import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageValidatePaymentModeComponent } from './page-validate-payment-mode.component';

describe('PageValidatePaymentModeComponent', () => {
  let component: PageValidatePaymentModeComponent;
  let fixture: ComponentFixture<PageValidatePaymentModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageValidatePaymentModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageValidatePaymentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
