import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  player : PlayerService;

  constructor(_player : PlayerService) {
    this.player = _player;
  }

  ngOnInit() {
  }

  @Input() playerBoard: Player;
  @Output() point = new EventEmitter();
  
  change(event){
    this.playerBoard = event;
    this.point.emit(this.playerBoard);
  }
}
