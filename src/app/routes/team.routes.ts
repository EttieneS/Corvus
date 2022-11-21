import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TeamCreateComponent } from '../components/teams/create/create.component';
import { TeamIndexComponent } from '../components/teams/index/index.component';

const TEAM_ROUTES: Routes = [{
    path: '',
    children: [
      { path: 'index', component: TeamIndexComponent },
      { path: 'create', component: TeamCreateComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(TEAM_ROUTES)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
