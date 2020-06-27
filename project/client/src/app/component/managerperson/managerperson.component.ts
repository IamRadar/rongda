import { Component, OnInit } from '@angular/core';
import { Activity } from '../../entity/activity';
import { ActivityService } from '../../service/activity/activity.service';
import { JoinService } from '../../service/join/join.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-managerperson',
  templateUrl: './managerperson.component.html',
  styleUrls: ['./managerperson.component.css']
})
export class ManagerpersonComponent implements OnInit {

  ishold = true;
  activities: Activity[];
  apage = 1;
  apages: number;
  anum: number;
  hosts: Activity[];
  hpage = 1;
  hpages: number;
  hnum: number;
  auid: string;

  constructor(private activityservice: ActivityService, private joinService: JoinService, private route: ActivatedRoute) {
    this.auid = this.route.snapshot.paramMap.get('uid');
    console.log('auid is ' + this.auid);
  }

  changetohold() {
    this.ishold = true;
  }

  changetojoin() {
    this.ishold = false;
  }

  getmyhost() {
    this.activityservice.byuid(this.auid).subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.hpage * 10 < params.length) {
        this.hosts = params.slice((this.hpage - 1) * 10, this.hpage * 10);
      } else {
        this.hosts = params.slice((this.hpage - 1) * 10 , params.length);
      }
      this.hnum = params.length;
      this.hpages = Math.ceil(this.hnum / 10);
    });
  }

  hnext() {
    this.activityservice.quanbyuid(this.auid).subscribe(params => {
      console.log('params is ' + params);
      if (this.hpage * 10 >= params) {
        alert('不能再往后了!');
      } else {
        this.hpage = this.hpage + 1;
        this.getmyhost();
      }
    });
  }

  hpre(uid: string) {
    if (this.hpage === 1) {
      alert('不能再往前了!');
    } else {
      this.hpage = this.hpage - 1;
      this.getmyhost();
    }
  }

  getmyapply() {
    this.joinService.useuid(this.auid).subscribe(params => {
      console.log('params length is ' + params.length);
      if (this.apage * 10 < params.length) {
        this.activities = params.slice((this.apage - 1) * 10, this.apage * 10);
      } else {
        this.activities = params.slice((this.apage - 1) * 10 , params.length);
      }
      this.anum = params.length;
      this.apages = Math.ceil(this.anum / 10);
    });
  }

  anext() {
    this.joinService.quanuseuid(this.auid).subscribe(params => {
      console.log('params is ' + params);
      if (this.apage * 10 >= params) {
        alert('不能再往后了!');
      } else {
        this.apage = this.apage + 1;
        this.getmyapply();
      }
    });
  }

  apre() {
    if (this.apage === 1) {
      alert('不能再往前了!');
    } else {
      this.apage = this.apage - 1;
      this.getmyapply();
    }
  }

  ngOnInit() {
    this.getmyhost();
    this.getmyapply();
  }

}
