import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{User, Player}from'../models/index';
import { PlayerService, ScorecardService, UserService, AdminService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.scss']
})

export class RegisterComponent {
    
    

    constructor(
        private router: Router,
        private playerService: PlayerService,
        private userService: UserService,
        private scorecardService: ScorecardService,
        private adminService:AdminService
       ) { }
       
    
        }