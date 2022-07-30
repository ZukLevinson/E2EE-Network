import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavButtonComponent } from './side-bar/nav-button/nav-button.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'stats', component: MainComponent },
  { path: 'chats', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
