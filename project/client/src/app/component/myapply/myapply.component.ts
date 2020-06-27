import { Component, OnInit } from '@angular/core';
import { JoinService } from '../../service/join/join.service';
import { Activity } from '../../entity/activity';

@Component({
  selector: 'app-myapply',
  templateUrl: './myapply.component.html',
  styleUrls: ['./myapply.component.css']
})
export class MyapplyComponent implements OnInit {

  activities: Activity[];
  page = 1;
  pages: number;
  num: number;

  constructor(private joinService: JoinService) { }

  getmyapply() {
    this.joinService.byuid().subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.page * 5 < params.length) {
        this.activities = params.slice((this.page - 1) * 5, this.page * 5);
      } else {
        this.activities = params.slice((this.page - 1) * 5 , params.length);
      }
      this.num = params.length;
      this.pages = Math.ceil(this.num / 5);
    });
  }

  next() {
    this.joinService.quanbyuid().subscribe(params => {
      console.log('params is ' + params);
      if (this.page * 5 >= params) {
        alert('不能再往后了!');
      } else {
        this.page = this.page + 1;
        this.getmyapply();
      }
    });
  }

  pre() {
    if (this.page === 1) {
      alert('不能再往前了!');
    } else {
      this.page = this.page - 1;
      this.getmyapply();
    }
  }

  comeout(aid: string) {
    this.joinService.delete(aid).subscribe(params => {
      if (params) {
        this.getmyapply();
        alert('退出活动成功!');
      }
    });
  }

  ngOnInit() {
    this.getmyapply();
  }

}
