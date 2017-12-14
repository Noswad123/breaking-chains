import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Player,User } from '../models/index';
import {Users}from '../data/user.data';

@Injectable()
export class PlayerService {
    private getUrl="api/player/5a028cdef36d28476ec0b983";
   private postUrl="api/player";
   players:Player[];
   users=Users;
    constructor(private http: Http) { }


    getPlayers(){
        console.log("retrieving players from the database");
        return this.players;

    }

 /*   registerPlayer(player){
        var headers=new Headers({'Content-Type':'application/json'});
        var options= new RequestOptions({headers:headers})
        return this.http.post(this.postUrl,JSON.stringify(player),options).map((response:Response)=>response.json());
    }
    getPlayers(){

        return this.http.get(this.playersUrl).map(res=>res.json());
    }
*/

}