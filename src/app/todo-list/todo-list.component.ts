import { Component ,OnInit } from '@angular/core';
import { faTrash , faPenToSquare , faList } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  liste=faList
  poubelle=faTrash
  pen=faPenToSquare
  todoList!:Todo[]
  constructor (public _TodoService:TodoService, private router: Router)
  {if (!localStorage.getItem("token"))
    this.router.navigateByUrl("/signin")}
  ngOnInit(): void {
      this._TodoService.getTodoList().subscribe(response => this.todoList = response);
        }
  deleteTodo(todo:Todo) {
    this._TodoService.deleteTodo(todo).subscribe(response => {
      this.todoList = response
      this.ngOnInit()
    }
      );
  }     
  selectedTodo!:Todo
  selectTodo(todo:Todo){
    
   this._TodoService.getTodoById(todo).subscribe(
    response=>this.selectedTodo=response
   )
  }

}
