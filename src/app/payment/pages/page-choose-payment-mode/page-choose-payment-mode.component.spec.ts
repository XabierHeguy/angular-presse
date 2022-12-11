import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChoosePaymentModeComponent } from './page-choose-payment-mode.component';

describe('PageChoosePaymentModeComponent', () => {
  let component: PageChoosePaymentModeComponent;
  let fixture: ComponentFixture<PageChoosePaymentModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChoosePaymentModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageChoosePaymentModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
