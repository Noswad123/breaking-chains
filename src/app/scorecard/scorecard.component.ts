import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../models/Player'
import { Course } from '../models/course'
import { Hole } from '../models/hole'
import { ScorecardService } from '../services/index'
import { getCurrentDebugContext } from '@angular/core/src/view/services';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  course: Course;
  players: Player[];
  score: number;
  currentHole: number=0;
  currentDist: number;
  updateTotal=[];
  selectedPlayer:Player={
 userName:"blank", 
 currentScore:[] 
}
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
  
    for(var i=0;i<this.players.length;i++){
      this.updateTotal.push(0);
      for(var j=0; j<this.course.holes.length;j++){
        this.players[i].currentScore.push(new Hole);
        this.players[i].currentScore[j].par=this.course.holes[j].par
        this.players[i].currentScore[j].distance=this.course.holes[j].distance               
      this.updateTotal[i]+=this.course.holes[j].par;
      }
      }
      
    }
  
  getPlayers() {
    
    this.players = this.scorecardService.getSelectedPlayers();  

  }


  decrScore(i){
console.log(i);
    if (this.players[i].currentScore[this.currentHole].par == 1) { } else {
      this.players[i].currentScore[this.currentHole].par -= 1;
      this.updateTotal[i] -= 1;
    }

  }
  incrScore(i) {
    console.log(i);
    this.players[i].currentScore[this.currentHole].par += 1;
    this.updateTotal[i] += 1;
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

arrayTackBy(index, player){

    return player.userName;
}


}
