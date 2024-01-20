import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heard-bar',
  templateUrl: './heard-bar.component.html',
  styleUrls: ['./heard-bar.component.css']
})
export class HeardBarComponent {
constructor(public todoService:TodoService , public user : UserService , private route:Router){
  if (localStorage.getItem('token'))
  this.user.btnSignValue='Sign out'
else
this.user.btnSignValue='Sign In'
}
signOut(){
  localStorage.removeItem("token")
  window.location.reload()
  this.route.navigateByUrl('/signin')
}
}
