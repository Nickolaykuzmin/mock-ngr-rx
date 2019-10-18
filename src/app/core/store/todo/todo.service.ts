import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrl = `https://jsonplaceholder.typicode.com/todos`;

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<ITodo[]>(this.todoUrl);
  }
}
