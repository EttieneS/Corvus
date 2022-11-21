import { Component, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TeamService {  
  constructor(private http: HttpClient) { }

  create(player: Team) 
  {    
    return this.http.post(environment.baseURL + 'team/create', player).subscribe(response => console.log(response));
  }

  getall()
  {
    return this.http.get(environment.baseURL + "team/getall");    
  }  
}
