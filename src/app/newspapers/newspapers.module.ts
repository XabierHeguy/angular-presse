import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListNewspapersComponent } from './pages/page-list-newspapers/page-list-newspapers.component';
import { PageAddNewspaperComponent } from './pages/page-add-newspaper/page-add-newspaper.component';
import { PageEditNewspaperComponent } from './pages/page-edit-newspaper/page-edit-newspaper.component';



@NgModule({
  declarations: [
    PageListNewspapersComponent,
    PageAddNewspaperComponent,
    PageEditNewspaperComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewspapersModule { }
