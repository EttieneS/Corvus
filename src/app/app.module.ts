import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PlayerIndexComponent } from './components/users/index/index.component';
import { PlayerCreateComponent } from './components/users/create/create.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatchIndexComponent } from './components/matches/index/index.component';

import { TeamIndexComponent } from './components/teams/index/index.component';
import { TeamCreateComponent } from './components/teams/create/create.component';
import { MatchCreateComponent } from './components/matches/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerIndexComponent,
    PlayerCreateComponent,
    TeamIndexComponent,
    TeamCreateComponent,
    MatchCreateComponent, 
    MatchIndexComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule, 

    MatButtonModule,
    MatCheckboxModule,
    MatInputModule, 
    MatFormFieldModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
