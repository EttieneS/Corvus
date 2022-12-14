import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../../services/match.service";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class MatchIndexComponent implements OnInit {
  matches: any; 
  matchTableData: any; 
  matchTableDataSource: MatTableDataSource<any>;

  displayedColumns = ["teamaid", "teambid", "score", "winner"]; 

  constructor(private matchService: MatchService) { }
  
  ngOnInit(): void 
  {
    this.getMatches();
  }

  getMatches(): void 
  {
    this.matchService.getalljointeams().subscribe(
      data => {        
        this.matchTableData = data;                
        this.matchTableDataSource = new MatTableDataSource<any>(this.matchTableData);        
      },
      error => {
        console.log(error);
      });
  }
}
