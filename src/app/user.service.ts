import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }
  btnSignValue:string=''
  getUser(login:string,password:string):Observable<User[]>{
    let params=new HttpParams().set("login",login)
                               .set("password",password)

    //return this.httpclient.get<User[]>/('http://localhost:3000/users').pipe(map(users=users.filter(user=user.login===login&&user.password===password)))
    
    return this.httpclient.get<User[]>('http://localhost:3000/users',{params})
    }
}
