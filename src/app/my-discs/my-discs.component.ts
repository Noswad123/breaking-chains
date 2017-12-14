import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Disc } from '../models/disc';
import { DiscService, UserService } from '../services/index';

@Component({
  selector: 'app-my-discs',
  templateUrl: './my-discs.component.html',
  styleUrls: ['./my-discs.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MyDiscsComponent implements OnInit {

  myDiscs: Disc[];            //How come discs=Disc[] doesn't work but tempDiscs=[] does
  selectedDisc: Disc;


  constructor(
    private location: Location,
    private discService: DiscService,
    private userService: UserService,
    private router: Router) { }
    ngOnInit(): void {
      this.getDiscs();
    }
  getDiscs(): void {
   
    this.myDiscs=this.userService.getDiscs()
      
  }


  sortDiscs(status: string): void {
    var myList = [];
    var test = document.getElementById("sort");
    test.innerHTML = " ";
    var display = 'none';

    if (status == 'all') {
      myList = this.myDiscs;
      display = "initial";
    } else {

      for (var i = 0; i < this.myDiscs.length; i++) {

        if (status == this.myDiscs[i].manufacturer) {
          myList.push(this.myDiscs[i]);
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
