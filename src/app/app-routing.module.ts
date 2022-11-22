import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchIndexComponent } from './components/matches/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'users/index', pathMatch: 'full' },  
  { path: 'users', loadChildren: () => import('./routes/user.routes').then(m => m.UserRoutingModule)},
  { path: 'teams', loadChildren: () => import('./routes/team.routes').then(m => m.TeamRoutingModule)},
  { path: 'matches', loadChildren: () => import('./routes/match.routes').then(m => m.MatchRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
