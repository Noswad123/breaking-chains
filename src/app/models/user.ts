import {Hole} from './hole';
import {Player} from './player';
import {Disc} from './disc';
import {Course} from  './course';
import {Statistics} from './statistics';

export class User {
  
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    friends:User[];
    playerInfo:Player;
    myDiscs: Disc[];
    favCourses: Course[];
    Stats: Statistics;
    _id:String;

}