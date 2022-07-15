import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'characters', component: CharactersComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'events', component: EventsComponent
  },
  // {
  //   path: 'item/:id', component: ItemInfoComponent
  // }
  {
    path: 'characters/:id', component: ItemInfoComponent
  },
  {
    path: 'comics/:id', component: ItemInfoComponent
  },
  {
    path: 'events/:id', component: ItemInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
