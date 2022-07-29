import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroIconModule, cube, home } from 'ng-heroicon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        cube,
        home,
      },
      {}
    ),
  ],
})
export class SideBarModule {}
