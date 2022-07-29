import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroIconModule, cube, home } from 'ng-heroicon';
import { ConnectionStatusComponent } from './connection-status/connection-status.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { SideBarComponent } from './side-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ConnectionStatusComponent,
    NavButtonComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeroIconModule.withIcons(
      {
        cube,
        home,
      },
      {}
    ),
  ],
  exports: [SideBarComponent],
})
export class SideBarModule {}
