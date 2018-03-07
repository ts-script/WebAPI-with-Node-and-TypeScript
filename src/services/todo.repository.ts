import { Service } from "typedi";
import { TodoItem } from '../models/todo.item';

@Service()
export class TodoRepository {

    private todos = [
        new TodoItem(1, 'My first Todo item', 'Example of a thing you need to do.'),
        new TodoItem(2, 'My second Todo item', 'Something worth taking note of.'),
        new TodoItem(3, 'My third Todo item', 'Another note.')
    ];

    public findAll(): TodoItem[] {
        return this.todos;
    }

    public findById(id: number): TodoItem {
        let todoById: TodoItem = undefined;
        this.todos.forEach(todo => {
            if (todo.id === id)
                todoById = todo;
        });
        return todoById;
    }

    public save(id: number, title: string, notes: string): TodoItem {
        const todo = new TodoItem(id, title, notes)
        this.todos.push(todo);
        return todo;
    }

    public remove(id: number): TodoItem {
        const todo = this.findById(id);
        if(todo)
            this.todos.splice(this.todos.indexOf(todo, 0), 1);
        return todo;
    }
}
