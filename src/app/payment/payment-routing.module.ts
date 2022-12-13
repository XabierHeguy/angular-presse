import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageChoosePaymentModeComponent } from './pages/page-choose-payment-mode/page-choose-payment-mode.component';
import { PageConfirmPaymentComponent } from './pages/page-confirm-payment/page-confirm-payment.component';
import { PageValidatePaymentModeComponent } from './pages/page-validate-payment-mode/page-validate-payment-mode.component';

const routes: Routes = [
  { path: '', component: PageChoosePaymentModeComponent },
  { path: 'validate', component: PageValidatePaymentModeComponent },
  { path: 'confirm', component: PageConfirmPaymentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule {}
