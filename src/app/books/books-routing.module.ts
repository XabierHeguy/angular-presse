import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddBookComponent } from './pages/page-add-book/page-add-book.component';
import { PageEditBookComponent } from './pages/page-edit-book/page-edit-book.component';
import { PageListBooksComponent } from './pages/page-list-books/page-list-books.component';

const routes: Routes = [
  { path: '', component: PageListBooksComponent },
  { path: 'edit', component: PageEditBookComponent },
  { path: 'add', component: PageAddBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
