import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{User}from'../models/index';
import { PlayerService, ScorecardService, UserService, AdminService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent {
    
    user={firstName: "",
    lastName: "",
    password: "",
    email: ""};

    constructor(
        private router: Router,
        private playerService: PlayerService,
        private userService: UserService,
        private scorecardService: ScorecardService,
        private adminService:AdminService
       ) { }
       postUser(user) {
        var completion = 0;
        var r = /\b[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,4}\b/;
        console.log(user);
        if (user.firstName) {
          completion++;
          this.user.firstName = "";
        } else {
          this.user.firstName = "Please submit a valid first name";
        }
        if (user.lastName) {
          completion++;
          this.user.lastName = "";
        } else {
          this.user.lastName = "Please Submit a valid last name";
        }
        if (user.password) {
          completion++;
          this.user.password = "";
        } else {
          this.user.password = "Please Submit a valid Password";
        }
    
        if (user.email.match(r)) {
          completion++;
    
          this.user.email = "";
        } else {
          this.user.email = "Please Submit a valid email";
    
        }
    
        console.log(completion);
        if (completion == 4) {
          this.userService.postUser(user).subscribe(res => console.log(res));
          console.log("User added to the database");
        }
      }
      cancel(){
       
        this.router.navigate(["login"])
    }
        }