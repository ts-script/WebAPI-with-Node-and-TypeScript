import {Service} from "typedi";
import { JsonController, Req, Res, Param, Body, Get, Post, Delete } from 'routing-controllers';

import { TodoRepository } from '../services/todo.repository';

@Service()
@JsonController('/todo')
export class TodoController {

    constructor(private todoRepository: TodoRepository) { }

    @Get()
    private async getAllTodos (): Promise<void> {
        return this.todoRepository.findAll();
    }

    @Get('/:id')
    private async getTodoById (@Param("id") id: number): Promise<void> {
        return this.todoRepository.findById(id);
    }

    @Post()
    private async createTodo (@Body() todo: any): Promise<void> {
        return this.todoRepository.save(todo.id, todo.title, todo.notes);
    }

    @Delete("/:id")
    private async removeTodo (@Param("id") id: number): Promise<void> {
        return this.todoRepository.remove(id);
    }
}
