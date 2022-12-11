import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEnterPersonalDataComponent } from './pages/page-enter-personal-data/page-enter-personal-data.component';
import { PageChoosePasswordComponent } from './pages/page-choose-password/page-choose-password.component';



@NgModule({
  declarations: [
    PageEnterPersonalDataComponent,
    PageChoosePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
