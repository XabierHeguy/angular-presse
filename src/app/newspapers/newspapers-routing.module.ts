import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddNewspaperComponent } from './pages/page-add-newspaper/page-add-newspaper.component';
import { PageEditNewspaperComponent } from './pages/page-edit-newspaper/page-edit-newspaper.component';
import { PageListNewspapersComponent } from './pages/page-list-newspapers/page-list-newspapers.component';

const routes: Routes = [
  { path: '', component: PageListNewspapersComponent },
  { path: 'edit', component: PageEditNewspaperComponent },
  { path: 'add', component: PageAddNewspaperComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewspapersRoutingModule {}
