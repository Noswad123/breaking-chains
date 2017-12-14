import { Component, OnInit } from '@angular/core';
import {ScorecardService} from '../services/index';
import {Player}from '../models/index';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  players;
      
    constructor(
      private scorecardService:ScorecardService
  ) { }

  ngOnInit() {
    this.getPlayers();
    
  }
  getPlayers(){
    this.players=this.scorecardService.selectedPlayers;
  }
  replay(){
    this.scorecardService.ifReplay=true;
  }
  calcScore(player:Player){
      var total=0;
    
      for(var j=0;j<player.currentScore.length;j++){
  
      total+=player.currentScore[j].par;
    
    }
    
        return total;

  }

}
