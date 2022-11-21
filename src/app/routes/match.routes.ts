import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MatchCreateComponent } from '../components/matches/create/create.component';
import { MatchIndexComponent } from '../components/matches/index/index.component';

const MATCH_ROUTES: Routes = [{
    path: '',
    children: [
      { path: 'index', component: MatchIndexComponent },
      { path: 'create', component: MatchCreateComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(MATCH_ROUTES)],
  exports: [RouterModule]
})
export class MatchRoutingModule { }
