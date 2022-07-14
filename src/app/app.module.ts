import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './components/header/header.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { EventsComponent } from './components/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';
import { ComicCardComponent } from './components/comics/comic-card/comic-card.component';
import { EventCardComponent } from './components/events/event-card/event-card.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharactersComponent,
    CardLayoutComponent,
    ComicsComponent,
    ItemInfoComponent,
    SearchPipe,
    EventsComponent,
    CharacterCardComponent,
    ComicCardComponent,
    EventCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
