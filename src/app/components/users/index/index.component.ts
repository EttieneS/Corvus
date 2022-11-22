import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PlayerService } from "../../../services/player.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class PlayerIndexComponent implements OnInit {
  players: any; 
  playerTableData: any; 
  playerTableDataSource: MatTableDataSource<any>;

  displayedColumns = ["firstname", "lastname", "position", "teamname", "active", "actions"]; 

  constructor(private playerService: PlayerService) { }
  
  ngOnInit(): void 
  {
    this.getPlayers();
  }

  getPlayers(): void 
  {
    this.playerService.getalljointeams().subscribe(
      data => {
        console.log(data);  
        this.playerTableData = data;                
        this.playerTableDataSource = new MatTableDataSource<any>(this.playerTableData);        
      },
      error => {
        console.log(error);
      });
  }

  editUser(id)
  {
    localStorage.setItem("player_id", id);
    
    window.location.href = "users/edit";
  }
}
