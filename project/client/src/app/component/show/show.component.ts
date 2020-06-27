import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Notice } from '../../entity/notice';
import { NoticesService } from '../../service/notices/notices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  notice: Notice = new Notice();
  anid: string;

  images = ['../../../assets/imgs/1.jpg', '../../../assets/imgs/2.jpg',
  '../../../assets/imgs/3.jpg', '../../../assets/imgs/4.jpg', '../../../assets/imgs/5.jpg', '../../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private noticesservice: NoticesService, private route: ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    this.anid = this.route.snapshot.paramMap.get('nid');
  }

  getone() {
    this.noticesservice.getone(this.anid).subscribe(params => this.notice = params);
  }

  ngOnInit() {
    this.getone();
  }

}
