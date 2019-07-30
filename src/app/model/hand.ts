export class Hand {

  constructor(readonly cards){}

  public randomCard(){
    return this.cards[Math.floor(Math.random()*this.cards.length)]
  }

}