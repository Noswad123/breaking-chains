import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Player, User } from '../models/index';

import { UserService, PlayerService, AdminService, ScorecardService } from '../services/index';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    email: string = "jamal.a.dawson@gmail.com";
    password: string = "jamal";
    users;//:User[];
    onRegister=false;

    user:User={
        firstName: "",
      lastName: "",
      password: "",
      email: "",
      friends:[],
      myDiscs:[],
      favCourses:[],
      Stats:[],
      _id:"",
      playerInfo:{
        userName:"",
        currentScore:[]
      }};


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private playerService: PlayerService,
        private scorecardService: ScorecardService,
        private adminService: AdminService
    ) { }

    ngOnInit() {
        //this.users=
        this.isLoggedIn();
        this.getUsers();
        

    }

    getUsers() {

        this.userService.getUsers().subscribe();
        this.users=this.userService.loadUsers()
        console.log(this.users);
        //this.userService.saveUsers(this.users);

    }

    login() {
        if (this.email == "email" && this.password == "password") {
            this.adminService.admin = true;
            this.router.navigate(["admin"])
        } else {
            for (var i = 0; i < this.users.length; i++) {

                if (this.email == this.users[i].email) {
                    if (this.password == this.users[i].password) {
                        this.userService.setUser(this.users[i]);
                        this.userService.isloggedin = true;
                        this.scorecardService.addSelected(this.users[i].playerInfo);
                        console.log(this.users[i].playerInfo.userName + " was successfully logged in.");
                        this.router.navigate(["player.page"]);
                    } else {
                        console.log("You were not logged in");
                        document.getElementById("incorrect").style.display="block";
                    }

                }else{
                    console.log("You were not logged in");
                    document.getElementById("incorrect").style.display="block";
                }
            }
        }
    }
    
    isLoggedIn() {

        if (this.userService.isloggedin) {
            this.router.navigate(["login.page"])
        } else {

            this.userService.isloggedin = false;
            // reset login status
            this.userService.logout();
            this.email = "email";
            this.password = "password";


        }

    }
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
          this.userService.setUser(this.user);
                        this.userService.isloggedin = true;
                        this.scorecardService.addSelected(this.user.playerInfo);
                        console.log(this.user.playerInfo.userName + " was successfully logged in.");
          this.router.navigate(["player.page"])
        }
      }
    toggleRegister(){
        this.onRegister=!this.onRegister;
    }

}
