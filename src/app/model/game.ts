import { Player } from './player';
import { Team } from './card';
import { Cards, CARDS} from './cards';

export class Game {

  readonly player1 = new Player(Team.BLUE, CARDS.blue);
  readonly player2 = new Player(Team.RED, CARDS.red);


}