import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerIndexComponent } from './components/users/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: PlayerIndexComponent },
  { path: 'users', loadChildren: () => import('./routes/user.routes').then(m => m.UserRoutingModule)},
  { path: 'teams', loadChildren: () => import('./routes/team.routes').then(m => m.TeamRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
