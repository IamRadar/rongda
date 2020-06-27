import { Component, OnInit } from '@angular/core';
import { Person } from '../../entity/person';
import { PersonService } from '../../service/person/person.service';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {

  edit = true;
  person: Person = new Person();
  gender: boolean;

  constructor(private personService: PersonService) { }

  getme() {
    const uid = localStorage.getItem('uid');
    console.log('uid is ' + uid);
    this.personService.getone(uid).subscribe(params => {
      this.person = params;
    });
  }

  change(): void {
    this.edit = !this.edit;
  }

  save(aname: string, aphone: string, agender: boolean) {
    console.log('component name is ' + aname + ' phone is ' + aphone + ' gender is ' + agender);
    this.personService.update(aname, aphone, agender).subscribe(params => {
      if (params) {
        alert('资料修改成功!');
        this.getme();
        this.edit = !this.edit;
      }
    });
  }

  ngOnInit() {
    this.getme();
  }

}
