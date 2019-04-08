import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-activityperson',
  templateUrl: './activityperson.component.html',
  styleUrls: ['./activityperson.component.css']
})
export class ActivitypersonComponent implements OnInit {

  persons: Person[];

  constructor(private personservice: PersonService) { }

  getpersons() {
    this.persons = this.personservice.getpersons();
  }

  ngOnInit() {
    this.getpersons();
  }

}
