import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User, Disc } from '../models/index';


@Injectable()
export class UserService {
    private url = "api/user/";
    private getUrl = "api/users";
    private users ;
    private user: User;
    isloggedin: boolean = false;
    constructor(private http: Http) { }

    getDiscs(): Disc[] {
        console.log(this.user.myDiscs);
        return this.user.myDiscs;
    }

    login(email: string, password: string): boolean {

        for (var i = 0; i < this.users.length; i++) {
            console.log(this.users[i].email);
            if (email == this.users[i].email) {
                if (password == this.users[i].password) {
                    this.setUser(this.users[i]);
                    this.isloggedin = true;
                    return true;
                } else {
                    return false;
                }

            }
        }
    }
    getUser() {
        return this.user;
    }
    getUsers() {

        console.log("retrieving users from mongoDb");
        return this.http.get(this.getUrl)
            .map((res) => this.users=res.json());


    }
    setUser(user) {
        //sets the user once login process completes
        this.user = user;

    }

    postUser(user) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.users.push(user);
        return this.http.post(this.url, JSON.stringify(user), options).map((response: Response) => {
            console.log(response);
            response.json()
        });

    }

    updateUser(user){
       
        console.log("Update works");
        this.http.put(this.url+user._id,user).subscribe();
    }

    deleteUser(id) {
                //use id to run delete operation
                this.http.delete(this.url+id).subscribe();

    }
   /* saveUsers(users) {

        this.users = users;
    }*/
    loadUsers() {
        return this.users;
    }

    logout() {
        this.isloggedin = false;
        console.log("No one is Logged in");
    }
}
