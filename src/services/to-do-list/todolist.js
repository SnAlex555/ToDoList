import { Database } from '../database/Database';

export class ToDoList {
    constructor () {
        this.database = Database.getInstance();
    }

    createTask(body) {
        return this.darabase.create("tasks" , body) ;
    }
}

export const todoList = new ToDoList();