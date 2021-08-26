import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private router: Router,private http: HttpClient){ }

  login(email:any , password:any)  {

    if(email =='gugi@gmail.com' &&  password == '12345'){

     localStorage.setItem("token", "fake-token");
      return true
    }
    else{
      return false
    }
 }

 isLogedin(){
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false
    }
 }

 logout(){
  localStorage.removeItem('user');
}

 getUser(){
  return this.http.get('https://jsonplaceholder.typicode.com/users');
}

isLoggedIn(): boolean{
  if(localStorage.getItem('token')){return true} else{
    return false
  }
}


}


