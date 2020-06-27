import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../service/person/person.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  save(old: string, new1: string, new2: string) {
    if (new1.length < 7 || new1.length > 16) {
      alert('密码位数过少或过多!');
    } else {
      this.personService.modify(old, new1, new2).subscribe(params => {
        if (params === 0) {
          alert('密码修改成功!');
        } else if (params === 1) {
          alert('旧密码填写错误!');
        } else {
          alert('两次输入的密码不一致!');
        }
      });
    }
  }

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

}
