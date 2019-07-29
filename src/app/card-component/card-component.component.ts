import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit() {
    console.log(this.card.value);
  }

}