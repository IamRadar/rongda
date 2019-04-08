import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {

  edit = true;
  person: Person;

  constructor() { }

  change(): void {
    this.edit = !this.edit;
  }

  save(): void {
    this.edit = !this.edit;
  }

  ngOnInit() {
  }

}
