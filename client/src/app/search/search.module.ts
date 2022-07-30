import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeroIconModule, search } from 'ng-heroicon';

@NgModule({
  declarations: [SearchComponent, SearchBarComponent],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        search,
      },
      {}
    ),
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
