export class Card{

  constructor(readonly team: Team, readonly value: number) { }

}

export enum Team {
  RED = "Red",
  BLUE = "Blue"
}