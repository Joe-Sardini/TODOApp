import uniqid from 'uniqid';

export default class Todo{
    constructor(){
        this.Todo = [];
    }

    addTodo(text){
        const todo = {
            id: uniqid(), 
            text
        };

        this.Todo.push(todo);
        this.persistData();
        return todo;    
    }

    persistData(){
        localStorage.setItem('Todo', JSON.stringify(this.Todo));
    }

    readStorage(){
        const storage = JSON.parse(localStorage.getItem('Todo'));
        if (storage) this.Todo = storage;
    }

    deleteItem(id){
        const index = this.Todo.findIndex(el => el.id === id);
        this.Todo.splice(index,1);
        this.persistData();
    }
}