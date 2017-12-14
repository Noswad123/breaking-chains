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
    user: User;
    users;//:User[];


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
                        this.router.navigate(["login.page"]);
                    } else {
                        console.log("You were not logged in");
                    }

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

}
