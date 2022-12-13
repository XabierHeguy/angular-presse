import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BasketRoutingModule } from './basket-routing.module';
import { PageDisplayBasketComponent } from './pages/page-display-basket/page-display-basket.component';

@NgModule({
  declarations: [PageDisplayBasketComponent],
  imports: [CommonModule, BasketRoutingModule],
})
export class BasketModule {}
