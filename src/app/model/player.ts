import {Team} from "./card";

export class Player {


  constructor(readonly team: Team, readonly hand){
    console.log("Initialzing player")
  }

}