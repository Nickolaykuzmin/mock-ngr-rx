import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { GetTodosSuccess, TodoActions, TodoActionTypes } from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActionTypes.GetTodos),
    switchMap(() => this.todoService.getTodos()),
    map((res) => new GetTodosSuccess(res))
  );

  constructor(private actions$: Actions<TodoActions>, private todoService: TodoService) {}

}
