import {Team} from "./card";
import {Hand} from './hand';

export class Player {

  readonly hand;

  constructor(readonly name, readonly team: Team, readonly startingHand){
    console.log("Initialzing player")
    this.hand = new Hand(startingHand);
  }

}