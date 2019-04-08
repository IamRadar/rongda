import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Notice } from '../notice';
import { NoticesService } from '../notices.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  notice: Notice;
  id: number;

  images = ['../../assets/imgs/1.jpg', '../../assets/imgs/2.jpg',
  '../../assets/imgs/3.jpg', '../../assets/imgs/4.jpg', '../../assets/imgs/5.jpg', '../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private noticesservice: NoticesService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  getnotice() {
    this.notice = this.noticesservice.getHero(this.id);
  }

  ngOnInit() {
    this.getnotice();
  }

}
