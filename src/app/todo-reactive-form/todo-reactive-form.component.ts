import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent { 
  constructor(private userService:UserService, private router:Router, private formBuilder: FormBuilder  ){}
  authForm=this.formBuilder.nonNullable.group(
    {
      login:['',Validators.required],
      password:['',Validators.required]
    })
checkLogin(){
if(this.authForm.value.login && this.authForm.value.password)
 this.userService.getUser(this.authForm.value.login,this.authForm.value.password).subscribe(result=>{ 
if(result.length)
{
localStorage.setItem("token",result[0].token)
this.userService.btnSignValue='Sign Out'
this.router.navigateByUrl('')
}
else
alert('login ou password incorrects!')
})
}

}
