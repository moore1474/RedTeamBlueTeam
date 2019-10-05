import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import {MatCardModule} from '@angular/material/card';
import { PlayerInfoComponentComponent } from './player-info-component/player-info-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule],
  declarations: [ AppComponent, CardComponentComponent, PlayAreaComponent, PlayerInfoComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
