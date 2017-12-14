import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Disc } from '../models/disc';
import { DiscService, UserService } from '../services/index';

@Component({
  selector: 'browse-discs',
  templateUrl: './browse-discs.component.html',
  styleUrls: ['./browse-discs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class BrowseDiscsComponent implements OnInit {

  discs:any;     //How come discs=Disc[] doesn't work but tempDiscs=[] does
  selectedDisc:Disc={
    name: "Select a Disc",
    manufacturer:"----",
    distance:0,
    turn:"----",
    fade:"----",
    type:"---"
  };


  constructor(
    private location: Location,
    private discService: DiscService,
    //private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {    
    
      this.getDiscs();   
    }
  
  getDiscs(): void {
    var local;
    this.discService.getDiscs().subscribe((res)=>this.discs=res)
    }
  
    
  sortDiscs(status: string): void {
    var myList = [];
    var test = document.getElementById("sort");
    test.innerHTML = " ";
    var display = 'none';

    if (status == 'all') {
      myList = this.discs;
      display = "initial";
    } else {

      for (var i = 0; i < this.discs.length; i++) {

        if (status == this.discs[i].manufacturer) {
          myList.push(this.discs[i]);
        }
      }
      for (var x = 0; x < myList.length; x++) {
        // if/else just to avoid commas in the front
        test.innerHTML = test.innerHTML + '<li>' + myList[x].name + '</li>';

      }
    }
    document.getElementById('discsList').style.display = display;
  }

 

  onSelect(disc: Disc): void {
    this.selectedDisc = disc;
  }

  back(): void {
    this.location.back();
  }
}
