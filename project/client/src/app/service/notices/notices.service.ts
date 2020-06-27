import { Injectable } from '@angular/core';
import { Notice } from '../../entity/notice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

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
export class NoticesService {

  private serviceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  add(notice: Notice): Observable<boolean> {
    console.log('service content is ' + notice.content);
    return this.httpClient.post<boolean>(this.serviceUrl + '/notice/add', notice, httpOptions);
  }

  delete(nid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/notice/delete?nid=${nid}`;
    return this.httpClient.delete<boolean>(url, httpOptions);
  }

  getall(): Observable<Notice[]> {
    console.log('localstorage is ' + localStorage.getItem('token'));
    return this.httpClient.get<Notice[]>(this.serviceUrl + '/notice/all', httpOptions);
  }

  getone(nid: string): Observable<Notice> {
    const url = `${this.serviceUrl}/notice/one?nid=${nid}`;
    return this.httpClient.get<Notice>(url, httpOptions);
  }

  maxint(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/notice/maxint', httpOptions);
  }

  quantity(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/notice/quantity', httpOptions);
  }
}
