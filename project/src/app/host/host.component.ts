import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {

  activity: Activity;

  images = ['../../assets/imgs/1.jpg', '../../assets/imgs/2.jpg',
  '../../assets/imgs/3.jpg', '../../assets/imgs/4.jpg', '../../assets/imgs/5.jpg', '../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private activityservice: ActivityService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
