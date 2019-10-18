import { Component, OnInit } from '@angular/core';
import { IAppState } from './core/store/app.state';
import { select, Store } from '@ngrx/store';
import { selectTodoList } from './core/store/todo/todo.selector';
import { Observable } from 'rxjs';
import { ITodo } from './core/store/todo/todo.interface';
import { GetTodos } from './core/store/todo/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mock-ngrx';
  private $todos: Observable<ITodo[]>;

  constructor(private store: Store<IAppState>) {
    this.$todos = this.store.pipe(select(selectTodoList));
  }

  public ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }
}
