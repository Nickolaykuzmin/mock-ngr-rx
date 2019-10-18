import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from './app.state';
import { todoReducer } from './todo/todo.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  todos: todoReducer
};

