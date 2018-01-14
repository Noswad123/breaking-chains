import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Discs} from '../data/disc.data';
import { Disc } from '../models/disc';

@Injectable()
export class DiscService {

  private discsUrl ='api/discs';
  discs;
  constructor(private http: Http) { }

  getDiscs() {
   
    console.log("retrieving discs from mongo db");
    return this.http.get(this.discsUrl).map(res =>this.discs=res.json());
     
  }
  loadDiscs(){
    return this.discs;
  }

  getDisc(id: number){
     
 
     return this.http.get(this.discsUrl).map(response => response.json().data as Disc);
    
  }

  delete(name: string) {
   
    return this.http.delete(this.discsUrl).map(() => null);
  }

}
