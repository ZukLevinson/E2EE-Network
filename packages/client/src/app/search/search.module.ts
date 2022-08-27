import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
  HeroIconModule,
  search,
  photograph,
  chat,
  documentText,
  microphone,
} from 'ng-heroicon';
import { TagComponent } from '../tag/tag.component';

@NgModule({
  declarations: [SearchComponent, SearchBarComponent, TagComponent],
  imports: [
    CommonModule,
    HeroIconModule.withIcons(
      {
        search,
        photograph,
        chat,
        documentText,
        microphone,
      },
      {
        defaultHostDisplay: 'block',
      }
    ),
  ],
  exports: [SearchComponent],
})
export class SearchModule {}
