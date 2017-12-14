import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import {Player} from '../models/player'
import {Courses} from '../data/course.data';
import {Players}from '../data/player.data';


@Injectable()
export class ScorecardService {
  selectedPlayer:Player;
  isPlaying:boolean=false;
  ifReplay:boolean=false;
  players=Players;
  selectedPlayers:Player[]=[];
  private courses= Courses;
  private course:Course;
  private selectedCourse:Course=this.courses[0];
  constructor(  ) { }

    getCourses(){
      return this.courses;
    }
  getCourse():Course{
      
      return this.selectedCourse;
    }
    getSelectedPlayers():Player[]{
       
      return this.selectedPlayers;
    
    }
    getPlayers():Player[]{
      
    return this.players;
  
  }
   
    onSelect(Player: Player): void {
     
      this.selectedPlayer = Player;
      
    }
  loadScorecard(course:Course,players:Player[]){

    this.selectedPlayers=players;
    this.selectedCourse=course;
    this.isPlaying=true;

  }
  addSelected(player:Player){
    console.log(player);
    this.selectedPlayers.push(player);
    
  }
}
