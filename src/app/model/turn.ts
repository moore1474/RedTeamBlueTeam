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


  public getPlayerStatus(playerNum){
    if (this.phase == Phase.SELECT_PHASE_1) {
      if(playerNum == 1 && this.player_1_selected == null){
        return "select your card";
      } else if(playerNum == 2 && this.player_2_selected==null){
        return "selecting card...";
      }
      
    }
    return "";
  }

}