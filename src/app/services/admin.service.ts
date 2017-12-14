import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminService {
  admin: boolean = false;
  private postUrl = "api/user";
 
  
  constructor(private _http: Http) { }

 postUser(user) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
 
    return this._http.post(this.postUrl, JSON.stringify(user), options).map((response: Response) => {
      console.log(response) ;
      response.json()});

  }
  
updateUser(user)
  {

  }
  deleteUser(email){

  }
fetchId(){
var email="jamal.a.dawson@gmail.com";

}
}

