import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  images = ['../../assets/imgs/1.jpg', '../../assets/imgs/2.jpg',
  '../../assets/imgs/3.jpg', '../../assets/imgs/4.jpg', '../../assets/imgs/5.jpg', '../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  ngOnInit() {
  }

}
