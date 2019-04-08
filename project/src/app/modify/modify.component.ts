import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  person: Person;
  newpwd: string;

  save() {
    this.person.pwd = this.newpwd;
  }

  constructor() { }

  ngOnInit() {
  }

}
