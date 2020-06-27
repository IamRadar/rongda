import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../../entity/activity';
import { ActivityService } from '../../service/activity/activity.service';
import { JoinService } from '../../service/join/join.service';
import { Join } from '../../entity/join';

@Component({
  selector: 'app-takepart',
  templateUrl: './takepart.component.html',
  styleUrls: ['./takepart.component.css']
})
export class TakepartComponent implements OnInit {

  activity: Activity = new Activity();
  id = 0;
  already = false;
  aaid: string;
  auid: string;

  images = ['../../../assets/imgs/1.jpg', '../../../assets/imgs/2.jpg',
  '../../../assets/imgs/3.jpg', '../../../assets/imgs/4.jpg', '../../../assets/imgs/5.jpg', '../../../assets/imgs/6.jpg' ];

  constructor(config: NgbCarouselConfig, private activityservice: ActivityService,
              private joinService: JoinService, private route: ActivatedRoute) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
    this.aaid = this.route.snapshot.paramMap.get('aid');
    this.auid = localStorage.getItem('uid');
    console.log('auid is ' + this.auid);
  }

  getbyaid() {
    console.log('before before');
    // const aaid = this.route.snapshot.paramMap.get('aid');
    this.activityservice.getone(this.aaid).subscribe(params => {
      console.log('params is ' + params.name);
      this.activity = params;
      console.log('activity name is ' + this.activity.name);
    });
  }

  getalready() {
    // const auid = sessionStorage.getItem('uid');
    // const aaid = this.route.snapshot.paramMap.get('aid');
    this.joinService.getalready(this.auid, this.aaid).subscribe(params => this.already = params);
  }

  comein() {
    // const auid = sessionStorage.getItem('uid');
    // const aaid = this.route.snapshot.paramMap.get('aid');
    this.joinService.maxint().subscribe(params => {
      const join: Join = {
        jid: params.toString(),
        uid: this.auid,
        aid: this.aaid
      };
      this.joinService.add(join).subscribe(param => {
        if (param) {
          this.getbyaid();
          this.getalready();
          alert('报名成功!');
        } else {
          alert('活动人数已满,报名失败!');
        }
      });
    });
  }

  comeout() {
    this.joinService.delete(this.aaid).subscribe(params => {
      if (params) {
        this.getbyaid();
        this.getalready();
        alert('退出活动成功!');
      }
    });
  }

  ngOnInit() {
    this.getbyaid();
    this.getalready();
  }

}
