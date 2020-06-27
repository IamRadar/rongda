import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Join } from '../../entity/join';
import { Person } from '../../entity/person';
import { Activity } from '../../entity/activity';

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
export class JoinService {

  private serviceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  add(join: Join): Observable<number> {
    return this.httpClient.post<number>(this.serviceUrl + '/join/add' , join , httpOptions);
  }

  delete(aid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/join/delete?aid=${aid}`;
    return this.httpClient.delete<boolean>(url , httpOptions);
  }

  getall(): Observable<Join[]> {
    return this.httpClient.get<Join[]>(this.serviceUrl + '/join/all' , httpOptions);
  }

  getalready(uid: string, aid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/join/getalready?uid=${uid}&aid=${aid}`;
    return this.httpClient.get<boolean>(url, httpOptions);
  }

  byaid(aid: string): Observable<Person[]> {
    const url = `${this.serviceUrl}/join/byaid?aid=${aid}`;
    return this.httpClient.get<Person[]>(url, httpOptions);
  }

  quanbyaid(aid: string): Observable<number> {
    const url = `${this.serviceUrl}/join/quanbyaid?aid=${aid}`;
    return this.httpClient.get<number>(url, httpOptions);
  }

  byuid(): Observable<Activity[]> {
    const url = `${this.serviceUrl}/join/byuid`;
    return this.httpClient.get<Activity[]>(url, httpOptions);
  }

  quanbyuid(): Observable<number> {
    const url = `${this.serviceUrl}/join/quanbyuid`;
    return this.httpClient.get<number>(url, httpOptions);
  }

  useuid(uid: string): Observable<Activity[]> {
    const url = `${this.serviceUrl}/join/useuid?uid=${uid}`;
    return this.httpClient.get<Activity[]>(url, httpOptions);
  }

  quanuseuid(uid: string): Observable<number> {
    const url = `${this.serviceUrl}/join/quanuseuid?uid=${uid}`;
    return this.httpClient.get<number>(url, httpOptions);
  }

  maxint(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/join/maxint' , httpOptions);
  }
}
