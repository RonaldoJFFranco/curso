import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'game-infos',
  templateUrl: './game-infos.component.html',
  styleUrls: ['./game-infos.component.css']
})
export class GameInfosComponent implements OnInit {

  @Input() sec: number;
  @Input() turn: number;
  @Input() playerTurn: Player;
  
  constructor() {
  }

  ngOnInit() {
  }  
}
