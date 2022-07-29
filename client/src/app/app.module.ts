import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { cube, HeroIconModule, menu } from 'ng-heroicon';
import { NavButtonComponent } from './side-bar/nav-button/nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainComponent,
    NavButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroIconModule.forRoot(
      { cube },
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
