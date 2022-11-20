import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PlayerService } from "../../../services/player.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = {
    firstname: '', 
  }
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  createUser()
  {    
    var response = this.playerService.create(this.player);

    window.location.href = "users/index";
  }
}
