import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerService } from "../../../services/player.service";
import { TeamService } from "../../../services/team.service" 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = {
    firstname: '',
    lastname: '', 
    teamid: -1, 
    position: -1,
    active: false
  }

  teams: any;
  positions: any;

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  ngOnInit(): void 
  {
    this.getTeams();
    this.getPositions();
  }

  createUser()
  {     
    console.log(this.player);
    this.playerService.create(this.player);

    window.location.href = "users/index";
  }

  getTeams()
  {
    var response = this.teamService.getall().subscribe(
      data => {
        return this.teams = data
      }
    )    
  }

  getPositions()
  {
    var response = this.playerService.getpositions().subscribe(
      data => {
        return this.positions = data
      })
  }
}
