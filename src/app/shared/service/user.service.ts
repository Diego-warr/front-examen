import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8989/rest.v1/user/all-users';
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

    return this.httpCliente.get(this.apiUrl,{headers:headers});
  }

  public login(email : string, password : string)
  {

  }

  public logout(token : string)
  {

  }
}
