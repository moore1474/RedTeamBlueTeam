import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {

  @Input() turn;

  constructor() { }

  ngOnInit() {
  }

}