import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { NavButtonComponent } from './side-bar/nav-button/nav-button.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'chats', component: ChatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
