import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { PlayerInfoComponentComponent } from './player-info-component/player-info-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule, MatDialogModule, BrowserAnimationsModule],
  declarations: [ AppComponent, CardComponentComponent, PlayAreaComponent, PlayerInfoComponentComponent ],
   entryComponents: [
    AppComponent
  ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
