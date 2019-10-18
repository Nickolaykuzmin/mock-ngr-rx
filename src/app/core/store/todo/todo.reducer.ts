import { TodoActions, TodoActionTypes } from './todo.actions';
import { ITodo } from './todo.interface';

export interface ITodoState {
  todos: ITodo[];
}

export const initialState: ITodoState = {
  todos: [{id: 213, userId: 123324, completed: false, title: 'Title'}]
};

export const todoReducer = (state = initialState, action: TodoActions): ITodoState => {
  switch (action.type) {

    case TodoActionTypes.GetTodosSuccess:
      return {...state, todos: action.payload};

    default:
      return state;
  }
};
