import { Component, Inject} from '@angular/core';
import { Game } from './model/game';
import { PlayerInfoComponentComponent } from './player-info-component/player-info-component.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';

  game = new Game();

  cardSelected(card) {
    this.game.turn.player_1_selected = card;
    console.log("Player 1 selected card");
    setTimeout(() => {
      console.log("Player 1 card removed");
      this.game.player1.hand.removeCard(card);
    }, 400);
    
    setTimeout(() => {
      this.game.turn.player_2_selected = this.game.player2.hand.randomCard();
      console.log("Player 2 Card selected")
      this.game.player2.hand.removeCard(this.game.turn.player_2_selected);
    }, 800);

    setTimeout(() => {
        console.log(this);
      }, 1200);

  }

}