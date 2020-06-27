import { Component, OnInit } from '@angular/core';
import { Activity } from '../../entity/activity';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivityService } from '../../service/activity/activity.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.css']
})
export class HostComponent implements OnInit {


  images = ['../../../assets/imgs/1.jpg', '../../../assets/imgs/2.jpg',
  '../../../assets/imgs/3.jpg', '../../../assets/imgs/4.jpg', '../../../assets/imgs/5.jpg', '../../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private activityservice: ActivityService) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  create(aname: string, asponsor: string, abegintime: Date, alength: number, aneedp: number, amoney: number, aintroduce: string) {
    console.log('begintime is' + abegintime);
    if (alength <= 0) {
      alert('活动时间不合法!');
    } else if (alength > 24) {
      alert('活动时间过长!');
    } else if (aneedp <= 0) {
      alert('活动人数过少!');
    } else if (aneedp > 500) {
      alert('活动人数超出限制!');
    } else if (amoney >= 10000) {
      alert('经费申请过多!');
    } else if (aintroduce.length <= 0 || aintroduce.length >= 200) {
      alert('活动介绍过长且不得为空!');
    } else {
      this.activityservice.maxint().subscribe(params => {
        const activity: Activity = {aid: (params + 1).toString(), name: aname, sponsor: asponsor, begintime: abegintime, needp: aneedp,
           money: amoney, state: 0, length: alength, numofp: 0, siteid: null, sitename: null, hostid: null, introduce: aintroduce};
        this.activityservice.add(activity).subscribe(param => {
          if (param) {
            alert('活动创建成功!');
          }
        });
      });
    }
  }

  ngOnInit() {
  }

}
