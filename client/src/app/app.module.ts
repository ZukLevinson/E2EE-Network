import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
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
} from 'ng-heroicon';
import { SideBarModule } from './side-bar/side-bar.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    HeroIconModule.forRoot(
      {
        cube,
        home,
        statusOnline,
        statusOffline,
        refresh,
        chartBar,
        chatAlt2,
      },
      {
        defaultHostDisplay: 'inlineBlock', // default 'none'
        attachDefaultDimensionsIfNoneFound: true, // default 'false'
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
