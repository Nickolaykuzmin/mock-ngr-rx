import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { ITodoState } from './todo.reducer';

const selectTodos = (state: IAppState) => state.todos;

export const selectTodoList = createSelector(
  selectTodos,
  (state: ITodoState) => state.todos
);
