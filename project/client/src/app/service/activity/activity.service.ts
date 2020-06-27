import { Injectable } from '@angular/core';
import { Activity } from '../../entity/activity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agree } from '../../entity/agree';

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
export class ActivityService {

  private serviceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.serviceUrl + '/activity/all' , httpOptions);
  }

  getone(aid: string): Observable<Activity> {
    console.log('before aid is ' + aid);
    const url = `${this.serviceUrl}/activity/one?aid=${aid}`;
    return this.httpClient.get<Activity>(url, httpOptions);
  }

  getallafter(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.serviceUrl + '/activity/after' , httpOptions);
  }

  getallbefore(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.serviceUrl + '/activity/before' , httpOptions);
  }

  getallofp(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(this.serviceUrl + '/activity/actofp' , httpOptions);
  }

  add(activity: Activity): Observable<boolean> {
    return this.httpClient.post<boolean>(this.serviceUrl + '/activity/add' , activity , httpOptions);
  }

  delete(aid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/activity/delete/${aid}`;
    return this.httpClient.delete<boolean>(url , httpOptions);
  }

  quantity(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/activity/quantity' , httpOptions);
  }

  quanafter(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/activity/quanafter' , httpOptions);
  }

  quanbefore(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/activity/quanbefore' , httpOptions);
  }

  maxint(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/activity/maxint' , httpOptions);
  }

  agree(aaid: string, asid: string): Observable<boolean> {
    const agree: Agree = {aid: aaid, sid: asid};
    console.log('service is aid ' + agree.aid + ' sid is ' + agree.sid);
    return this.httpClient.post<boolean>(this.serviceUrl + '/activity/agree' , agree , httpOptions);
  }

  disagree(aid: string): Observable<boolean> {
    return this.httpClient.post<boolean>(this.serviceUrl + '/activity/disagree' , aid , httpOptions);
  }

  byuid(uid: string): Observable<Activity[]> {
    const url = `${this.serviceUrl}/activity/byuid?uid=${uid}`;
    return this.httpClient.get<Activity[]>(url, httpOptions);
  }

  quanbyuid(uid: string): Observable<number> {
    const url = `${this.serviceUrl}/activity/quanbyuid?uid=${uid}`;
    return this.httpClient.get<number>(url, httpOptions);
  }

}
