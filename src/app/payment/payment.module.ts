import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageChoosePaymentModeComponent } from './pages/page-choose-payment-mode/page-choose-payment-mode.component';
import { PageConfirmPaymentComponent } from './pages/page-confirm-payment/page-confirm-payment.component';
import { PageValidatePaymentModeComponent } from './pages/page-validate-payment-mode/page-validate-payment-mode.component';
import { PaymentRoutingModule } from './payment-routing.module';

@NgModule({
  declarations: [
    PageChoosePaymentModeComponent,
    PageValidatePaymentModeComponent,
    PageConfirmPaymentComponent,
  ],
  imports: [CommonModule, PaymentRoutingModule],
})
export class PaymentModule {}
