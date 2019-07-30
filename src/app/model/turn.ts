import { Card } from './card';

export enum Phase {
  SELECT_PHASE_1 = 1,
  RESOLVE_PHASE_2 = 2,
  DISCARD_PHASE_3
}

export class Turn {

  phase = Phase.SELECT_PHASE_1;
  player_1_selected: Card;
  player_2_selected: Card;

  constructor(){
  
  }

  public getPlayer1Status(){
    if (this.phase == Phase.SELECT_PHASE_1) {
      return "select your card";
    }
    return "";
  }

}