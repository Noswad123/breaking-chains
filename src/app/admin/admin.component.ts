import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService, UserService } from '../services/index';
import { User } from '../models/index';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  fetching = "barf";
  switch = "normal";
  users;
  getData: string;
  postData: string;
  user = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
  };

  disc = {
    name: "",
    manufacturer: "",
    type: "",
    fade: "",
    turn: "",
    distance: 0
  };


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.isLoggedIn();
    this.getUsers();

  }
  isSelected(user){

      if(user.firstName==this.user.firstName)
      {

        return true;
      }else{
        return false;
      }
  }
  onSelect(user){
    this.user=user;
    console.log(this.user.firstName);
  }
  isLoggedIn() {
    if (!this.adminService.admin) {
      this.router.navigate(["login"])
    }
  }
  toggle(x) {
    this.switch = x;

  }
  postDisc(disc) {


    var completion = 0;

    console.log(disc);
    if (disc.name) {
      completion++;
      this.disc.name = "";
    } else {
      this.disc.name = "Please submit a valid first name";
    }
    if (disc.manufacturer) {
      completion++;
      this.disc.manufacturer = "";
    } else {
      this.disc.manufacturer = "Please Submit a valid last name";
    }
    if (disc.type) {
      completion++;
      this.disc.type = "";
    } else {
      this.disc.type = "Please Submit a valid Password";
    }
    if (disc.turn) {
      completion++;
      disc.fade = disc.turn + "%"
      this.disc.turn = "";
    } else {
      this.disc.turn = "Please Submit a valid email";

    }
    if (disc.fade) {
      completion++;
      disc.fade = disc.fade + "%";
      this.disc.fade = "";
    } else {
      this.disc.fade = "Please Submit a valid email";

    }
    if (disc.distance > 0) {
      completion++;

    } else {
      this.disc.distance = 0;

    }

    console.log(completion);
    if (completion == 6) {
      //this.adminService.postUser(disc).subscribe(res =>console.log(res));
      console.log("disc added to the database");
    }

  }
  postCourse() {

    console.log("course added to the database");

  }
  updateUser() {
   
   var message;
    message = this.returnId(this.user.email);

    if (message != "User not found") {
    this.userService.updateUser(this.user);
    }
    console.log(message);
  }

  deleteUser() {

    console.log("Preparing to delete user at this email: " + this.user.email)
    var message;
    message = this.returnId(this.user.email);

    if (message != "User not found") {

      this.userService.deleteUser(message);
    }

    console.log(message);

  }
  returnId(email) {
console.log(email);
    for (var i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email);
      if (email == this.users[i].email) {
        return this.users[i]._id;
      }
    }


    return "User not found";

  }
  logout() {
    console.log("you are logged off");
    this.router.navigate(["login"])
  }

  getUsers() {
    this.users = this.userService.loadUsers();
    console.log(this.users);

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
      this.getUsers();
      console.log(this.users);
    }
  }



}
