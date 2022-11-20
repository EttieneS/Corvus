import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PlayerCreateComponent } from '../components/users/create/create.component';
import { PlayerIndexComponent } from '../components/users/index/index.component';

const USER_ROUTES: Routes = [{
    path: '',
    children: [
      { path: 'index', component: PlayerIndexComponent },
      { path: 'create', component: PlayerCreateComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
