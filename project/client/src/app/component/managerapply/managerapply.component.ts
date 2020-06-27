import { Component, OnInit } from '@angular/core';
import { Site } from '../../entity/site';
import { Host } from '../../entity/host';
import { ActivityService } from '../../service/activity/activity.service';
import { SiteService } from '../../service/site/site.service';

@Component({
  selector: 'app-managerapply',
  templateUrl: './managerapply.component.html',
  styleUrls: ['./managerapply.component.css']
})
export class ManagerapplyComponent implements OnInit {

  hosts: Array<Host>;
  sites: Site[];
  // selectsite: Site;
  beforepage = 1;
  beforepages: number;
  beforenum: number;

  constructor(private activityservice: ActivityService, private siteService: SiteService) { }

  getcanuse(aid: string, date: Date) {
    console.log('canuse date is ' + date);
    this.siteService.getcanuse(aid, date).subscribe(params => {
      this.sites = params;
    });
  }

  getallbefore() {
    this.activityservice.getallbefore().subscribe(params => {
      this.hosts = [];
      if (this.beforepage * 5 < params.length) {
        for (let i = (this.beforepage - 1) * 5; i < this.beforepage * 5; i++) {
          // console.log('111 begin i is ' + i + ' params is ' + params[i].name);
          this.hosts.push({activity: params[i] , sid: null });
          // console.log('111 end i is ' + i + ' params is ' + params[i].name);
        }
      } else {
        for (let i = (this.beforepage - 1) * 5; i < params.length; i++) {
          // console.log('222 begin i is ' + i + ' params is ' + params[i].name);
          this.hosts.push({activity: params[i] , sid: null });
          // console.log('222 end i is ' + i + ' params is ' + params[i].name);
        }
      }
      this.beforenum = params.length;
      this.beforepages = Math.ceil(this.beforenum / 5);
    });
  }

  nextb() {
    this.activityservice.quanbefore().subscribe(params => {
      if (this.beforepage * 5 > params) {
        alert('不能再往后了!');
      } else {
        this.beforepage = this.beforepage + 1;
        this.getallbefore();
      }
    });
  }

  preb() {
    if (this.beforepage === 1) {
      alert('不能再往前了!');
    } else {
      this.beforepage = this.beforepage - 1;
      this.getallbefore();
    }
  }

  delete(aid: string) {
    this.activityservice.delete(aid).subscribe(params => {
      if (params === true) {
        alert('活动已取消!');
        this.getallbefore();
      }
    });
  }

  agree(aid: string, sid: string, date: Date) {
    // console.log('select site is ' + this.selectsite.name);
    // console.log('site is ' + site.name);
    console.log('component aid is ' + aid + ' sid is ' + sid);
    this.activityservice.agree(aid, sid).subscribe(params => {
      if (params === true) {
        alert('活动已批准!');
        this.getallbefore();
        this.getcanuse(aid, date);
      }
    });
  }

  disagree(aid: string) {
    this.activityservice.disagree(aid).subscribe(params => {
      if ( params === true) {
        alert('活动已驳回!');
        this.getallbefore();
      }
    });
  }

  ngOnInit() {
    this.getallbefore();
    // this.getunused();
  }
}
