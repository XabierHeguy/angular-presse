import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { PageAddBookComponent } from './pages/page-add-book/page-add-book.component';
import { PageEditBookComponent } from './pages/page-edit-book/page-edit-book.component';
import { PageListBooksComponent } from './pages/page-list-books/page-list-books.component';

@NgModule({
  declarations: [
    PageListBooksComponent,
    PageAddBookComponent,
    PageEditBookComponent,
  ],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
