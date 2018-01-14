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
  selectedDiscs=new Array(3);
 
  constructor(
    private location: Location,
    private discService: DiscService,
    //private userService: UserService,
    private router: Router) { }

    ngOnInit(): void {    
    
      this.getDiscs();
      this.loadSelector(); 
     
    }
  
  getDiscs(): void {
   
    this.discService.getDiscs().subscribe(()=>this.discs=this.discService.loadDiscs());
   
    
   
  
  }
  loadSelector(){

for(var i=0;i<this.selectedDiscs.length;i++)
{
  this.selectedDiscs[i]={
    Name: "Select a Disc",
    Manufacturer:"----",
    Distance:0,
    Turn:"----",
    Fade:"----",
    Type:"---"
  };
}

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

 

  onSelect(disc: Disc,i): void {
    this.selectedDiscs[i] = disc;
  }

  back(): void {
    this.location.back();
  }
}
