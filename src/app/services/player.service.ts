import { Component, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  constructor(private http: HttpClient) { }

  create(player: Player) {    
    return this.http.post(environment.baseURL + 'player/create', player).subscribe(response => console.log(response));
  }

  getpositions()
  {      
    return this.http.get(environment.baseURL + "player/getpositions");
  }
  
  getalljointeams()
  {
    return this.http.get(environment.baseURL + "player/getalljointeams");
  }
}
