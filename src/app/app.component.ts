import { Component } from '@angular/core';
import {Game} from './model/game';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  game = new Game();

constructor() {
  console.log("Starting game");
 }

}
