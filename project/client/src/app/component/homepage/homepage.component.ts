import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Notice } from '../../entity/notice';
import { NoticesService } from '../../service/notices/notices.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  notices: Notice[];
  page = 1;
  pages: number;
  num: number;

  images = ['../../../assets/imgs/1.jpg', '../../../assets/imgs/2.jpg',
  '../../../assets/imgs/3.jpg', '../../../assets/imgs/4.jpg', '../../../assets/imgs/5.jpg', '../../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private noticesservice: NoticesService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  getall() {
    this.noticesservice.getall().subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.page * 10 < params.length) {
        this.notices = params.slice((this.page - 1) * 10, this.page * 10);
      } else {
        this.notices = params.slice((this.page - 1) * 10 , params.length);
      }
      this.num = params.length;
      this.pages = Math.ceil(this.num / 10);
    });
  }

  next() {
    this.noticesservice.quantity().subscribe(params => {
      console.log('params is ' + params);
      if (this.page * 10 >= params) {
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
