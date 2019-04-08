import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {

  persons: Person[];

  constructor(private personservice: PersonService) { }

  getpersons() {
    this.persons = this.personservice.getpersons();
  }

  ngOnInit() {
    this.getpersons();
  }

}
