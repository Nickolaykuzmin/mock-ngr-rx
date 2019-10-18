import { Action } from '@ngrx/store';
import { ITodo } from './todo.interface';

export enum TodoActionTypes {
  GetTodosSuccess = '[Todo] Get Todos Success',
  GetTodos        = '[Todo] Get Todos',
  GetTodo         = '[Todo] Get Todo',
  GetTodoSuccess  = '[Todo] Get Todo Success',
}

export class GetTodo implements Action {
  readonly type = TodoActionTypes.GetTodo;
}

export class GetTodos implements Action {
  readonly type = TodoActionTypes.GetTodos;
}

export class GetTodosSuccess implements Action {
  readonly type = TodoActionTypes.GetTodosSuccess;

  constructor(public payload: ITodo[]) {}
}

export class GetTodoSuccess implements Action {
  readonly type = TodoActionTypes.GetTodoSuccess;

  constructor(public payload: number) {}
}

export type TodoActions = GetTodosSuccess | GetTodos | GetTodo | GetTodoSuccess;
