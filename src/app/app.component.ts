 import { Component } from '@angular/core';
import {Card} from "./model/card";
import {ALL_CARDS} from "./model/cards";


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  readonly cards = ALL_CARDS;

constructor() {
 }

}
