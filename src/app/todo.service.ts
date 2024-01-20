import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( private _httpClient:HttpClient) { }
  getTodoList():Observable<Todo[]> {
    return this._httpClient.get<Todo[]>("http://localhost:3000/todos")
  }
  deleteTodo(todo:Todo):Observable<Todo[]>{
    return this._httpClient.delete<Todo[]>(`http://localhost:3000/todos/${todo.id}`)
  }
  getTodoById(todo:Todo):Observable<Todo>{
    return this._httpClient.get<Todo>(`http://localhost:3000/todos/${todo.id}`)
  }  
  todoDetailShowModal=false
  todoUpdateShowModal=false
  todoAddShowModal=false
  updateTodo(todo:Todo):Observable<Todo>{
   return this._httpClient.put<Todo>(`http://localhost:3000/todos/${todo.id}`,todo) 
  }
  addTodo(todo:Todo):Observable<Todo[]>{
    return this._httpClient.post<Todo[]>(`http://localhost:3000/todos`,todo) 
   }
}
