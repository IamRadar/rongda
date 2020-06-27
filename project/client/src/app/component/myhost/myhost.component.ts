import { Component, OnInit } from '@angular/core';
import { Activity } from '../../entity/activity';
import { ActivityService } from '../../service/activity/activity.service';

@Component({
  selector: 'app-myhost',
  templateUrl: './myhost.component.html',
  styleUrls: ['./myhost.component.css']
})
export class MyhostComponent implements OnInit {

  activities: Activity[];
  page = 1;
  pages: number;
  num: number;

  constructor(private activityService: ActivityService) { }

  getmyhost() {
    this.activityService.getallofp().subscribe(params => {
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
    this.activityService.getallofp().subscribe(params => {
      console.log('params is ' + params.length);
      if (this.page * 5 >= params.length) {
        alert('不能再往后了!');
      } else {
        this.page = this.page + 1;
        this.getmyhost();
      }
    });
  }

  cancel(aid: string) {
    this.activityService.delete(aid).subscribe(params => {
      if (params) {
        alert('活动申请已取消!');
        this.getmyhost();
      }
    });
  }

  delete(aid: string) {
    this.activityService.delete(aid).subscribe(params => {
      if (params ) {
        alert('已删除记录!');
        this.getmyhost();
      }
    });
  }

  pre() {
    if (this.page === 1) {
      alert('不能再往前了!');
    } else {
      this.page = this.page - 1;
      this.getmyhost();
    }
  }

  ngOnInit() {
    this.getmyhost();
  }

}
