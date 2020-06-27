import { Injectable } from '@angular/core';
import { Login } from '../../entity/login';
import { Reg } from '../../entity/reg';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../../entity/token';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serviceUrl = 'http://localhost:8080';

  // token: string;

  alogin: Login = {
    uid: '33333',
    pwd: '33333',
    isteacher: true
  };

  areg: Reg = {
    uid: '3333333',
    pwd: '111111',
    card: '55555555'
  };

  constructor(private httpClient: HttpClient) { }

  /*login(model): Observable<string> {
    const url = `${this.serviceUrl}/login`;
    return this.httpClient.post<string>(url, JSON.stringify(model), httpOptions);
  }

  sendToken(token): Observable<string> {
    console.log('token is ' + token);
    const ahttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }),
      withCredentials: true
    };
    console.log('authorization is ' + ahttpOptions.headers.get('Content-Type'));
    console.log('authorization is ' + ahttpOptions.headers.get('Authorization'));
    let headers2 = new HttpHeaders({'Authorization': 'Bearer '+token});
    return this.httpClient.get<string>(this.serviceUrl + '/token', {headers: headers2});
    return this.httpClient.get<string>(this.serviceUrl + '/token', ahttpOptions);
}*/

  login(username: string , password: string , ist: boolean): Observable<Token> {
    this.alogin.uid = username;
    this.alogin.pwd = password;
    this.alogin.isteacher = ist;
    return this.httpClient.post<Token>(this.serviceUrl + '/login' , this.alogin, httpOptions);
  }

  logout(): Observable<boolean> {
    console.log('is logging out');
    return this.httpClient.post<boolean>(this.serviceUrl + '/logout' , {} , httpOptions);
  }


  islog(): Observable<boolean> {
    return this.httpClient.get<boolean>(this.serviceUrl + '/islog', httpOptions);
  }

  isteacher(): Observable<boolean> {
    return this.httpClient.get<boolean>(this.serviceUrl + '/isteacher', httpOptions);
  }

  register(username: string , password: string , thiscard: string): Observable<number> {
    this.areg.uid = username;
    this.areg.pwd = password;
    this.areg.card = thiscard;
    console.log('is registering');
    console.log('uid is ' + this.areg.uid + ' pwd is ' + this.areg.pwd + ' card is ' + this.areg.card);
    return this.httpClient.post<number>(this.serviceUrl + '/reg' , this.areg , httpOptions);
  }

  /*logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('currentUserName', '');
    alert('You just logged out.');
  }*/

}
