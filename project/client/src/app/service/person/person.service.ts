import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Person } from '../../entity/person';

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
export class PersonService {

  private serviceUrl = 'http://localhost:8080';

  person: Person;

  constructor(private httpClient: HttpClient) { }

  getall(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.serviceUrl + '/user/all', httpOptions);
  }

  getone(uid: string): Observable<Person> {
    const url = `${this.serviceUrl}/user/one?uid=${uid}`;
    return this.httpClient.get<Person>(url, httpOptions);
  }

  add(person: Person): Observable<Person> {
    return this.httpClient.post<Person>(this.serviceUrl + '/user/insert' , person , httpOptions);
  }

  delete(uid: string): Observable<Person> {
    const url = `${this.serviceUrl}/user/delete/${uid}`;
    console.log(uid);
    return this.httpClient.delete<Person>(url, httpOptions);
  }

  update(name: string, phone: string, gender: boolean): Observable<boolean> {
    console.log('service name is ' + name + ' phone is ' + phone + ' gender is ' + gender);
    const url = `${this.serviceUrl}/user/update?name=${name}&phone=${phone}&gender=${gender}`;
    return this.httpClient.get<boolean>(url, httpOptions);
  }

  quantity(): Observable<number> {
    return this.httpClient.get<number> (this.serviceUrl + '/user/quantity' , httpOptions);
  }

  modify(old: string, new1: string, new2: string): Observable<number> {
    const url = `${this.serviceUrl}/user/modify?old=${old}&new1=${new1}&new2=${new2}`;
    return this.httpClient.get<number>(url, httpOptions);
  }
}
