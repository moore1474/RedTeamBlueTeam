import {Team} from "../model/card";
import {Card} from "../model/card";

export class Cards {
  
  readonly all = [
   new Card(Team.RED, 1),
   new Card(Team.BLUE, 1),
   new Card(Team.RED, 2),
   new Card(Team.BLUE, 2),
   new Card(Team.RED, 3),
   new Card(Team.BLUE, 3),
];

readonly blue = [];

readonly red = [];

constructor(){
   // this.blue.concat(this.all.filter(crd => crd.team === Team.BLUE));
   // this.red.concat(this.all.filter(crd => crd.team === Team.RED));
}


}

export const CARDS = new Cards();