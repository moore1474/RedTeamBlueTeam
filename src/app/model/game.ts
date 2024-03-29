import { Player } from './player';
import { Team } from './card';
import { Cards, CARDS} from './cards';
import { Turn } from './turn';

export class Game {

  readonly player1 = new Player('Nick', Team.BLUE, CARDS.blue);
  readonly player2 = new Player('Computer', Team.RED, CARDS.red);
  readonly turn = new Turn();

}