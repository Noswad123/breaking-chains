import { User } from '../models/user';

export const Users: User[] = [

    {
        firstName: "Jamal",
        lastName: "Dawson",
        email: "jamal.a.dawson@gmail.com",
        password:"jamal",
        playerInfo: {
            userName: "Noswad",
            currentScore: []
        },
        myDiscs: [
            { name: 'Firebird',type: "Distance Driver",  distance: 359,manufacturer:"Innova", turn:"2%",fade:"76%" },
            { name: 'King', type: "Distance Driver", distance: 455,manufacturer:"Westside", turn:"-24%",fade:"77%" },
            {name: 'Bard', type: "Mid-Range", distance: 277,manufacturer:"Westside", turn:"13%",fade:"46%" },
            { name: 'Wraith', type: "Distance Driver", distance: 416,manufacturer:"Innova", turn:"-19%",fade:"61%" },
            { name: 'Undertaker', type: "Fairway Driver", distance: 366,manufacturer:"Innova", turn:"-19%",fade:"38%"},
            { name: 'Nuke', type: "Distance Driver", distance: 440,manufacturer:"Discraft", turn:"-19%",fade:"56%" },
            { name: 'Tern',  type: "Distance Driver",distance: 431,manufacturer:"Innova", turn:"-52%",fade:"46%" },
            { name: 'Chainsaw', type: "Putt & Approach", distance: 292,manufacturer:"Black Zombie", turn:"0%",fade:"18%" },
            {name: 'Harp', type: "Putt & Approach", distance: 268,manufacturer:"Westside", turn:"2%",fade:"55%" },
            { name: 'Northman',  type: "Distance Driver",distance: 385,manufacturer:"Westside", turn:"-19%",fade:"43%" },
            {name: 'Beast', type: "Distance Driver", distance: 393,manufacturer:"Innova", turn:"-38%",fade:"38%" },
            { name: 'Maul',  type: "Distance Driver",distance: 340,manufacturer:"Latitude 64", turn:"-37%",fade:"25%" },
            { name: 'Warship',  type: "Mid-Range",distance: 314,manufacturer:"Westside", turn:"-9%",fade:"25%" },
            { name: 'Flick', type: "Distance Driver", distance: 379,manufacturer:"Discraft", turn:"19%",fade:"77%"},
            { name: 'Mamba', type: "Distance Driver", distance: 416,manufacturer:"Innova", turn:"-88%",fade:"27%" },
            { name: 'Monarch',  type: "Distance Driver",distance: 403,manufacturer:"Innova", turn:"-70%",fade:"26%" },
            { name: 'Rival', type: "Fairway Driver", distance: 351,manufacturer:"Legacy", turn:"-4%",fade:"40%" },
            { name: 'Falchion',  type: "Fairway Driver",distance: 369,manufacturer:"Latitude 64", turn:"-19%",fade:"38%" },
            { name: 'Xcalibur', type: "Distance Driver", distance: 420,manufacturer:"Innova", turn:"2%",fade:"81%" }
            
        ],
        friends:[],
        favCourses: [],
        Stats: {},
        _id:""
    },
    {
        firstName: "Lauren",
        lastName: "McGrath",
        email: "lmcgrath@gmail.com",
        password:"lauren",
        
        playerInfo: {
            userName: "L-Boogie",
            currentScore: []
        },
        myDiscs: [{ name: 'World', type: "Distance Driver", distance: 431,manufacturer:"Westside", turn:"16%",fade:"82%" }],
        friends:[],
        favCourses: [],
        Stats: {},
        _id:""
    },
    {
        firstName: "Jared",
        lastName: "Dawson",
        email: "jdawson2@gmail.com",
        password:"jared",
        playerInfo: {
            userName: "Bob",
            currentScore: []
        },
        myDiscs: [
            { name: 'Thunderbird', type: "Distance Driver", distance: 380,manufacturer:"Innova", turn:"-1%",fade:"39%" },
        { name: 'World', type: "Distance Driver", distance: 431,manufacturer:"Westside", turn:"16%",fade:"82%" }
    ],
        friends:[],
        favCourses: [],
        Stats: {},
        _id:""
    }



]