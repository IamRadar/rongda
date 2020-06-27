import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../../service/activity/activity.service';
import { Activity } from '../../entity/activity';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: Activity[];
  page = 1;
  pages: number;
  num: number;

  images = ['../../../assets/imgs/1.jpg', '../../../assets/imgs/2.jpg',
  '../../../assets/imgs/3.jpg', '../../../assets/imgs/4.jpg', '../../../assets/imgs/5.jpg', '../../../assets/imgs/6.jpg' ];

  constructor(private activityservice: ActivityService, config: NgbCarouselConfig) { }

  getall() {
    this.activityservice.getallafter().subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.page * 8 < params.length) {
        this.activities = params.slice((this.page - 1) * 8, this.page * 8);
      } else {
        this.activities = params.slice((this.page - 1) * 8 , params.length);
      }
      this.num = params.length;
      this.pages = Math.ceil(this.num / 8);
    });
  }

  next() {
    this.activityservice.quanafter().subscribe(params => {
      console.log('params is ' + params);
      if (this.page * 8 >= params) {
        alert('不能再往后了!');
      } else {
        this.page = this.page + 1;
        this.getall();
      }
    });
  }

  pre() {
    if (this.page === 1) {
      alert('不能再往前了!');
    } else {
      this.page = this.page - 1;
      this.getall();
    }
  }


  ngOnInit() {
    this.getall();
  }

}
