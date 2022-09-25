export interface Characters {
    name:             string;
    alternate_names:  string[];
    species:          string;
    gender:           Gender;
    house:            House;
    dateOfBirth:      string;
    yearOfBirth:      number | string;
    wizard:           boolean;
    ancestry:         Ancestry;
    eyeColour:        string;
    hairColour:       string;
    wand:             Wand;
    patronus:         string;
    hogwartsStudent:  boolean;
    hogwartsStaff:    boolean;
    actor:            string;
    alternate_actors: string[];
    alive:            boolean;
    image:            string;
}

export enum Ancestry {
    Empty = "",
    HalfBlood = "half-blood",
    PureBlood = "pure-blood",
    Squib = "squib",
}

export enum Gender {
    Female = "female",
    Male = "male",
}

export interface Wand {
    wood:   string;
    core:   Core;
    length: number | string;
}

export enum House {
    Gryffindor = "Gryffindor",
    Slytherin = "Slytherin",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw"
}

export enum Core {
    DragonHeartstring = "dragon heartstring",
    Empty = "",
    UnicornTailHair = "unicorn tail-hair",
}
