import { LEVELS } from './levels.enum';

export class Task {
    // * type task list
    name =""; 
    descriptions = ""; 
    complete = false;
    level = LEVELS.NORMAL;

    // *can use like prop
    constructor(name, description, complete, level){
        this.name = name;
        this.descriptions = description;
        this.complete = complete;
        this.level = level;
    }
}

