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

  blue(){
    return this.all.filter(crd => crd.team === Team.BLUE);
  }

  red(){
    return this.all.filter(crd => crd.team === Team.RED);
  }

}