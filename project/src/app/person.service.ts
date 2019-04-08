import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons: Person[] = [
    {pid: '101', hostnum: 0, joinnum: 0, pwd: '101', name: 'alice', card: '152135213', phone: '111111', gender: true},
    {pid: '102', hostnum: 0, joinnum: 0, pwd: '102', name: 'mike', card: '43534224', phone: '222222', gender: true},
    {pid: '103', hostnum: 0, joinnum: 0, pwd: '103', name: 'john', card: '83993828', phone: '333333', gender: false},
    {pid: '104', hostnum: 0, joinnum: 0, pwd: '104', name: 'mary', card: '98425511', phone: '444444', gender: true},
    {pid: '105', hostnum: 0, joinnum: 0, pwd: '105', name: 'lisa', card: '645434324', phone: '555555', gender: false}
  ];

  getpersons() {
    return this.persons;
  }

  constructor() { }
}
