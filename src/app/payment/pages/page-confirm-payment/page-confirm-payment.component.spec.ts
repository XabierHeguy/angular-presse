import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConfirmPaymentComponent } from './page-confirm-payment.component';

describe('PageConfirmPaymentComponent', () => {
  let component: PageConfirmPaymentComponent;
  let fixture: ComponentFixture<PageConfirmPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageConfirmPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConfirmPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
