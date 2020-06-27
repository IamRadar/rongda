import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Teacher } from '../../entity/teacher';

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
export class TeacherService {

  teachers: Teacher[];

  private serviceUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<Teacher[]> {
    console.log('service is working!');
    return this.httpClient.get<Teacher[]>(this.serviceUrl + '/teacher/all', httpOptions);
  }

  delete(tid: string): Observable<boolean> {
    const url = `${this.serviceUrl}/teacher/delete?tid=${tid}`;
    console.log(tid);
    return this.httpClient.delete<boolean>(url, httpOptions);
  }

  add(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(this.serviceUrl + '/teacher/add', teacher , httpOptions);
  }

  quantity(): Observable<number> {
    return this.httpClient.get<number>(this.serviceUrl + '/teacher/quantity', httpOptions);
  }
}
