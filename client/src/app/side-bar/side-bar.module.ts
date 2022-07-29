import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroIconModule, cube } from 'ng-heroicon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        cube,
      },
      {}
    ),
  ],
})
export class SideBarModule {}
