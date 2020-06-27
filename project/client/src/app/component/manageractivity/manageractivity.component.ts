import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../entity/activity';
import { ActivityService } from '../../service/activity/activity.service';

@Component({
  selector: 'app-manageractivity',
  templateUrl: './manageractivity.component.html',
  styleUrls: ['./manageractivity.component.css']
})
export class ManageractivityComponent implements OnInit {

  activities: Activity[];
  afterpage = 1;
  afterpages: number;
  afternum: number;


  constructor(private activityservice: ActivityService) { }

  getallafter() {
    this.activityservice.getallafter().subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.afterpage * 5 < params.length) {
        this.activities = params.slice((this.afterpage - 1) * 5, this.afterpage * 5);
      } else {
        this.activities = params.slice((this.afterpage - 1) * 5 , params.length);
      }
      this.afternum = params.length;
      this.afterpages = Math.ceil(this.afternum / 5);
    });
  }

  nexta() {
    this.activityservice.quanafter().subscribe(params => {
      console.log('params is ' + params);
      if (this.afterpage * 5 >= params) {
        alert('不能再往后了!');
      } else {
        this.afterpage = this.afterpage + 1;
        this.getallafter();
      }
    });
  }

  prea() {
    if (this.afterpage === 1) {
      alert('不能再往前了!');
    } else {
      this.afterpage = this.afterpage - 1;
      this.getallafter();
    }
  }

  delete(aid: string) {
    this.activityservice.delete(aid).subscribe(params => {
      if (params === true) {
        alert('活动已取消!');
        this.getallafter();
      }
    });
  }

  ngOnInit() {
    this.getallafter();
  }

}
