import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../models/user';
import {UserService } from '../services/index';


@Component({
  selector: 'player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss']
})
export class PlayerPageComponent implements OnInit {
user:User;

  constructor(
    private router: Router,
    private userService: UserService) {
    
   }

  ngOnInit() {
    console.log("You are logged in");
    this.getUser();
  }
  getUser(){

    this.user=this.userService.getUser();

  }
  goToMyBag(){

    this.router.navigate(["myDiscs"]);
  }
  logout(){
    console.log("you are logged off");
    this.userService.isloggedin=false;
    this.router.navigate(["login"])
}

}
