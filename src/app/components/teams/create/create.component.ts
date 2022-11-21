import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TeamService } from "../../../services/team.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class TeamCreateComponent implements OnInit {
  team = {
    teamname: '', 
  }
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
  }

  createTeam()
  {     
    this.teamService.create(this.team);

    window.location.href = "teams/index";
  }
}