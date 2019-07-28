export class Card{

  constructor(readonly team: Team, readonly value: number) { }

}

enum Team {
  RED = "Red",
  BLUE = "Blue"
}

export const cards = [
   new Card(Team.RED, 1),
   new Card(Team.BLUE, 1)
]