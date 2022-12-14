import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewspapersRoutingModule } from './newspapers-routing.module';
import { PageAddNewspaperComponent } from './pages/page-add-newspaper/page-add-newspaper.component';
import { PageEditNewspaperComponent } from './pages/page-edit-newspaper/page-edit-newspaper.component';
import { PageListNewspapersComponent } from './pages/page-list-newspapers/page-list-newspapers.component';

@NgModule({
  declarations: [
    PageListNewspapersComponent,
    PageAddNewspaperComponent,
    PageEditNewspaperComponent,
  ],
  imports: [CommonModule, NewspapersRoutingModule],
})
export class NewspapersModule {}
