import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../entity/person';
import { PersonService } from '../../service/person/person.service';
import { Teacher } from '../../entity/teacher';
import { TeacherService } from '../../service/teacher/teacher.service';
import { ActivityService } from '../../service/activity/activity.service';

@Component({
  selector: 'app-managerhome',
  templateUrl: './managerhome.component.html',
  styleUrls: ['./managerhome.component.css']
})
export class ManagerhomeComponent implements OnInit {

  ismanage = true;

  islog = false;
  ateacher: Teacher;

  ppage = 1;
  ppages: number;
  pnum: number;
  tpage = 1;
  tpages: number;
  tnum: number;

  persons: Person[];
  teachers: Teacher[];
  hostnum: number;

  constructor(private personservice: PersonService, private teacherService: TeacherService, private activityService: ActivityService) { }

  gethostnum() {
    this.activityService.getallofp().subscribe(params => {
      this.hostnum = params.length;
    });
  }

  nextp() {
    this.personservice.quantity().subscribe(params => {
      console.log('params is ' + params);
      if (this.ppage * 5 >= params) {
        alert('不能再往后了!');
      } else {
        this.ppage = this.ppage + 1;
        this.getpersons();
      }
    });
  }

  prep() {
    if (this.ppage === 1) {
      alert('不能再往前了!');
    } else {
      this.ppage = this.ppage - 1;
      this.getpersons();
    }
  }

  nextt() {
    this.teacherService.quantity().subscribe(params => {
      console.log('params is ' + params);
      if (this.tpage * 5 >= params) {
        alert('不能再往后了!');
      } else {
        this.tpage = this.tpage + 1;
        this.getteachers();
      }
    });
  }

  pret() {
    if (this.tpage === 1) {
      alert('不能再往前了!');
    } else {
      this.tpage = this.tpage - 1;
      this.getteachers();
    }
  }

  getpersons() {
    // console.log('getting persons');
    this.personservice.getall().subscribe(params => {
      if (this.ppage * 5 < params.length) {
        this.persons = params.slice((this.ppage - 1) * 5, this.ppage * 5);
      } else {
        this.persons = params.slice((this.ppage - 1) * 5, params.length);
      }
      this.pnum = params.length;
      this.ppages = Math.ceil(this.pnum / 5);
    });
  }

  getteachers() {
    // console.log('getting teachers');
    this.teacherService.getall().subscribe(params => {
      console.log('params is ' + params.length);
      if (this.tpage * 5 < params.length) {
        this.teachers = params.slice((this.tpage - 1) * 5, this.tpage * 5);
      } else {
        this.teachers = params.slice((this.tpage - 1) * 5, params.length);
      }
      console.log('teachers is ' + this.teachers.length);
      this.tnum = params.length;
      this.tpages = Math.ceil(this.tnum / 5);
    });
  }

  delete(id: string) {
    this.personservice.delete(id)
      .subscribe(params => {
        if ( params ) {
          alert('删除成功!');
          this.getpersons();
        }
      });
  }

  deletet(id: string) {
    this.teacherService.delete(id).subscribe(params => {
      if (params) {
        alert('删除成功!');
        this.getteachers();
      } else {
        alert('请先删除相应的注册用户!');
      }
    });
  }

  addt(tid: string, card: string) {
    this.teacherService.add({tid, card} as Teacher).subscribe(params => {
      this.getteachers();
      console.log(params);
      alert('添加成功');
    });
  }

  changetomanage() {
    this.ismanage = true;
  }

  changetocreate() {
    this.ismanage = false;
  }

  ngOnInit() {
    this.getteachers();
    this.getpersons();
    this.gethostnum();
  }

}
