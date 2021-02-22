import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8989/rest.v1/user';
  httpOptions = {
    header : new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  };

  constructor(
    private httpCliente : HttpClient
  ) { }


  public getAllUsers()
  {
    let headers = new HttpHeaders().set('Type-content','aplication/json');

    return this.httpCliente.get(this.apiUrl+"/all-users",{headers:headers});
  }

  public login(email : string, password : string)
  {
    let params = new HttpParams().set('email',email).set('password',password);
    let headers = new HttpHeaders().set('Type-content','aplication/json');

    return this.httpCliente.post(this.apiUrl+"/login",{headers:headers},{params});
  }

  public create(firstName:string,lastName:string,email:string,password:string)
  {
    

    let body ={
      'firstName':firstName,
    'lastName':lastName,
    'email':email,
    'password':password
    };

    let headers = new HttpHeaders().set('Type-content','aplication/json');

    return this.httpCliente.post(this.apiUrl+"/create",body,{headers:headers});
  }

  public logout(token : string)
  {

  }
}
