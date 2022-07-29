import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeroIconModule,
  cube,
  home,
  statusOffline,
  chartBar,
  chatAlt2,
  refresh,
  statusOnline,
} from 'ng-heroicon';
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
        statusOnline,
        statusOffline,
        refresh,
        chartBar,
        chatAlt2,
      },
      {}
    ),
  ],
  exports: [SideBarComponent],
})
export class SideBarModule {}
