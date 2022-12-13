import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconCloseComponent } from './components/icon-close/icon-close.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';

@NgModule({
  declarations: [IconNavComponent, IconCloseComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [IconNavComponent, IconCloseComponent],
})
export class IconsModule {}
