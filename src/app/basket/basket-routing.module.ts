import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDisplayBasketComponent } from './pages/page-display-basket/page-display-basket.component';

const routes: Routes = [{ path: '', component: PageDisplayBasketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketRoutingModule {}
