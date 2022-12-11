import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageChoosePaymentModeComponent } from './pages/page-choose-payment-mode/page-choose-payment-mode.component';
import { PageValidatePaymentModeComponent } from './pages/page-validate-payment-mode/page-validate-payment-mode.component';
import { PageConfirmPaymentComponent } from './pages/page-confirm-payment/page-confirm-payment.component';



@NgModule({
  declarations: [
    PageChoosePaymentModeComponent,
    PageValidatePaymentModeComponent,
    PageConfirmPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
