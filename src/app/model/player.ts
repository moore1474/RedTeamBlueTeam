import {Team} from "./card";

export class Player {

  readonly team: Team;
  readonly hand;

  constructor(team, hand){
      this.team = team;
      this.hand = hand;
  }

}