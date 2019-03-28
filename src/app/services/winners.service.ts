import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/model/player';

@Injectable({
  providedIn: 'root'
})
export class WinnersService {

  private readonly API = 'https://vast-spire-73802.herokuapp.com/winners';
  
  constructor(private http: HttpClient) { }

  getWinners(){
  }

  addWinner(player: Player, time: number){
  }
}

