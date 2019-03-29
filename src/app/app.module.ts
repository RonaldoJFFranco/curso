import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { GameInfosComponent } from './components/game-infos/game-infos.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { PlayerService } from './services/player.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { WinnersComponent } from './components/winners/winners.component';
import { TimerPipe } from './pipes/timer.pipe';
import { SetPointDirective } from './directives/set-point.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    GameInfosComponent,
    GameBoardComponent,
    WinnersComponent,
    TimerPipe,
    SetPointDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  exports: [ModalModule],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule { }
