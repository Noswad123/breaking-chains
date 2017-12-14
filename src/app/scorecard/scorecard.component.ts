import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/Player'
import { Course } from '../models/course'
import { Hole } from '../models/hole'
import { ScorecardService } from '../services/index'

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  course: Course;
  players: Player[];
  holes: Hole[];
  score: number;
  currentHole: number=0;
  currentDist: number;
  selectedPlayer:Player;

  constructor(
    private scorecardService: ScorecardService,
    private router: Router) { }

  ngOnInit() {

    this.getCourse();
    this.getPlayers();
    this.getHoles(this.course);
    

  }
  getCourse() {

    this.course = this.scorecardService.getCourse();

  }
  getHoles(course: Course) {

    this.holes = this.course.holes;
    for(var i=0;i<this.players.length;i++){
      for(var j=0; j<this.holes.length;j++){
        
          this.players[i].currentScore.push(this.holes[j]);
         
      }
      }
      
    }
  
  getPlayers() {

    this.players = this.scorecardService.getSelectedPlayers();
   

  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
    console.log(this.selectedPlayer.userName);
    console.log(this.selectedPlayer.currentScore[this.currentHole].par)
    
  }

  decrScore(): void {
console.log(this.selectedPlayer.userName);
    if (this.selectedPlayer.currentScore[this.currentHole].par == 1) { } else {
      this.selectedPlayer.currentScore[this.currentHole].par -= 1;
    }
  }
  incrScore(): void {

    this.selectedPlayer.currentScore[this.currentHole].par += 1;
  }

  changeHole(change: number) {

    if (this.currentHole == 0 && change < 1) {
      this.currentHole = this.course.holes.length-1;
    } else if (this.currentHole == this.course.holes.length-1 && change == 1) {
      this.currentHole = 0;
    } else {
      this.currentHole += change;
    }

  }
finishRound(){
  
}
showPlayers(){

  console.log(this.players);
}

}
