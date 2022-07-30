import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {
  cube,
  HeroIconModule,
  home,
  statusOnline,
  statusOffline,
  refresh,
  chartBar,
  chatAlt2,
  user,
} from 'ng-heroicon';
import { SideBarModule } from './side-bar/side-bar.module';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MainComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    HttpClientModule,
    HeroIconModule.forRoot(
      {
        cube,
        home,
        statusOnline,
        statusOffline,
        refresh,
        chartBar,
        chatAlt2,
        user,
      },
      {
        defaultHostDisplay: 'inlineBlock',
        attachDefaultDimensionsIfNoneFound: true,
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
