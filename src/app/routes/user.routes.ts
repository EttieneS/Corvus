import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CreateComponent } from '../components/users/create/create.component';
import { IndexComponent } from '../components/users/index/index.component';

const USER_ROUTES: Routes = [{
    path: '',
    children: [
      { path: 'index', component: IndexComponent },
      { path: 'create', component: CreateComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(USER_ROUTES)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
