import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { GameComponent } from './components/game/game.component';
import { WinnersComponent } from './components/winners/winners.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'game', component : GameComponent},
  {path: 'winners', component : WinnersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
