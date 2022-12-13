import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageChoosePasswordComponent } from './pages/page-choose-password/page-choose-password.component';
import { PageEnterPersonalDataComponent } from './pages/page-enter-personal-data/page-enter-personal-data.component';

const routes: Routes = [
  { path: '', component: PageEnterPersonalDataComponent },
  { path: 'edit', component: PageChoosePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
