import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../../services/match.service";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class TeamIndexComponent implements OnInit {
  // matches: any; 
  // matchTableData: any; 
  // matchTableDataSource: MatTableDataSource<any>;

  // displayedColumns = ["teamaid", "teambid"]; 

  // constructor(private matchService: MatchService) { }
  constructor() {}

  ngOnInit(): void 
  {
    // this.getMatches();
  }

  // getMatches(): void 
  // {
  //   this.matchService.getalljointeams().subscribe(
  //     data => {        
  //       this.matchTableData = data;
  //       console.log(data);
        
  //       this.matchTableDataSource = new MatTableDataSource<any>(this.matchTableData);        
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

}
