import { Component, OnInit } from '@angular/core';
import {Disc,Course,Player} from '../models/index';
import { Router } from '@angular/router';
import {ScorecardService} from '../services/index';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'round-setup',
  templateUrl: './round-setup.component.html',
  styleUrls: ['./round-setup.component.scss']
})
export class RoundSetupComponent implements OnInit {
players:Player[];
selectedPlayers:Player[]= new Array;
course:Course;
courses:Course[];
selectedPlayer:Player;
toBeRemoved:Player;
guest:string="";
  constructor(
      private scorecardService: ScorecardService,
      private router:Router
  ) { }

  ngOnInit() {
    this.getCourse();
    this.getCourses();
    this.getPlayers();
    
  }
  
getCourses(){
  this.courses=this.scorecardService.getCourses();
}
  changCourse(course:Course){
    this.course=course;
    document.getElementById("courses").style.display="none";

  }
  onCourse(course:Course){
      this.course=course;
      document.getElementById("courses").style.display="none";
  }
  viewCourses(){
    var x=document.getElementById("courses");
    console.log("hello");
    if(x.style.display=="none"){
      x.style.display="inline";
    }else{
      x.style.display="none";
    }
  }
 
  getPlayers(){
    this.players=this.scorecardService.getPlayers();
      this.selectedPlayers=this.scorecardService.selectedPlayers;
    

  }

  addPlayer(){
    if(this.selectedPlayer)
    {
      console.log(this.selectedPlayer.userName+" was added to the round");
      this.findPlayer(this.selectedPlayer,this.selectedPlayers,this.players);
    } 

  }
  removePlayer(){
    if(this.toBeRemoved){
        console.log(this.toBeRemoved.userName+" has been removed!");
        this.findPlayer(this.toBeRemoved,this.players,this.selectedPlayers);

        }

      
    }
    
  
  findPlayer(player:Player,addList:Player[],moveList:Player[]){
    
    for(var i=0;i<moveList.length;i++){
      
              if(player.userName==moveList[i].userName){
                moveList.splice(i,1);
                addList.push(player);
      
              }
      
            }
    
    
  }
  startRound(){
this.scorecardService.loadScorecard(this.course,this.selectedPlayers);
this.router.navigate(["scorecard"]);
    
  }
  getCourse(){

      this.course=this.scorecardService.getCourse();

  }
  onSelect(player:Player){
    this.selectedPlayer=player;
  }
  onRemoval(player:Player){
    this.toBeRemoved=player;
  }
  addGuest(){
    
    console.log(this.guest);
    if(this.guest==""){
        console.log("input a guest please");
    }else{
    var player=new Player
    player.userName=this.guest;
    player.currentScore=this.course.holes;
    this.selectedPlayers.push(player);
    }


  }
  

}
