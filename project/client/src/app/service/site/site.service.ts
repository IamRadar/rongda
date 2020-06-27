import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Site } from '../../entity/site';

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
export class SiteService {

  private serviceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<Site[]> {
    return this.httpClient.get<Site[]>(this.serviceUrl + '/site/all' , httpOptions);
  }

  getcanuse(aaid: string, aadate: Date): Observable<Site[]> {
    const adate = aadate.toString();
    console.log('aaid is ' + aaid + ' aadate is ' + aadate);
    const url = `${this.serviceUrl}/site/canuse?aid=${aaid}&date=${adate}`;
    return this.httpClient.get<Site[]>(url, httpOptions);
  }

  quantity(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/site/quantity' , httpOptions);
  }

  add(site: Site): Observable<boolean> {
    return this.httpClient.post<boolean>(this.serviceUrl + '/site/add' , site , httpOptions);
  }

  delete(sid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/site/delete/${sid}`;
    return this.httpClient.delete<boolean>(url, httpOptions);
  }

  maxint(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/site/maxint' , httpOptions);
  }

}
