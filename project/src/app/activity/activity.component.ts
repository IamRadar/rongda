import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Activity } from '../activity';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: Activity[];

  images = ['../../assets/imgs/1.jpg', '../../assets/imgs/2.jpg',
  '../../assets/imgs/3.jpg', '../../assets/imgs/4.jpg', '../../assets/imgs/5.jpg', '../../assets/imgs/6.jpg' ];

  constructor(private activityservice: ActivityService, config: NgbCarouselConfig) { }

  getactivities() {
    this.activities = this.activityservice.getactivities();
  }

  ngOnInit() {
    this.getactivities();
  }

}
