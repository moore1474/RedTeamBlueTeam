import { Component } from '@angular/core';
import { Game } from './model/game';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  game = new Game();

  constructor() {
    console.log("Starting game");
  }

  cardSelected(card) {
    this.game.turn.player_1_selected = card;
    this.game.player1.hand.removeCard(card);
    setTimeout(() => {
      this.game.turn.player_2_selected = this.game.player2.hand.randomCard();
      this.game.player2.hand.removeCard(this.game.turn.player_2_selected);
    }, 635);

  }

}