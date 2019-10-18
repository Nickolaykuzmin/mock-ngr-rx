import { ITodoState } from './todo/todo.reducer';

export interface IAppState {
  todos: ITodoState;
}

export const initialAppState: IAppState = {
  todos: null
};

export function getInitialState(): IAppState {
  return initialAppState;
}
