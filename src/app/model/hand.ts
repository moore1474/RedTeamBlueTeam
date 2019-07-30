export class Hand {

  constructor(private cards){}

  public randomCard(){
    return this.cards[Math.floor(Math.random()*this.cards.length)]
  }

  removeCard(card){
    this.cards = this.cards.filter(function(item){return item!=card});

  }

}