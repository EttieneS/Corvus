import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../../services/match.service";
import { MatSelectModule } from '@angular/material/select';
import { Match } from "../../../models/match";
import { Team } from "../../../models/team";
import { TeamService } from "../../../services/team.service";
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class MatchCreateComponent implements OnInit {
  match = {
    id: 0,
    teamaid: -1, 
    teambid: -1
  }

  teams: any;

  constructor(private matchService: MatchService, private teamService: TeamService) { }

  ngOnInit(): void 
  {
    this.getTeams();
  }

  createMatch()
  {         
    this.matchService.create(this.match);

    window.location.href = "matches/index";
  }

  getTeams()
  {
    var response = this.teamService.getall().subscribe(
      data => {
        return this.teams = data
      }
    )
    console.log("response: " + response[0]);
  }

}
