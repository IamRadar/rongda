import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-takepart',
  templateUrl: './takepart.component.html',
  styleUrls: ['./takepart.component.css']
})
export class TakepartComponent implements OnInit {

  activity: Activity;
  id = 0;
  already = 0;

  images = ['../../assets/imgs/1.jpg', '../../assets/imgs/2.jpg',
  '../../assets/imgs/3.jpg', '../../assets/imgs/4.jpg', '../../assets/imgs/5.jpg', '../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private activityservice: ActivityService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  getactivity(id: number) {
    this.activity = this.activityservice.getactivity(id);
  }

  ngOnInit() {
    this.getactivity(this.id);
  }

}
