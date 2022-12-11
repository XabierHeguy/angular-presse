import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListBooksComponent } from './pages/page-list-books/page-list-books.component';
import { PageAddBookComponent } from './pages/page-add-book/page-add-book.component';
import { PageEditBookComponent } from './pages/page-edit-book/page-edit-book.component';



@NgModule({
  declarations: [
    PageListBooksComponent,
    PageAddBookComponent,
    PageEditBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
