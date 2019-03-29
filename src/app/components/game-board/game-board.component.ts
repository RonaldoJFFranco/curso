import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  @Input() playerBoard : Player;
  @Output() point = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  
  change(event){
    this.playerBoard = event;
    this.point.emit(this.playerBoard);
  }
}
