import { Component, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match';

@Injectable({
  providedIn: 'root'
})

export class MatchService {

  constructor(private http: HttpClient) { }

  create(match: Match) {
    console.log(match + " inside service");    
    return this.http.post(environment.baseURL + 'match/create', match).subscribe(response => console.log(response));
  }
}
