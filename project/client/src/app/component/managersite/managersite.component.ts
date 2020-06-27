import { Component, OnInit } from '@angular/core';
import { Site } from '../../entity/site';
import { SiteService } from '../../service/site/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './managersite.component.html',
  styleUrls: ['./managersite.component.css']
})
export class ManagersiteComponent implements OnInit {

  sites: Site[];
  page = 1;
  pages: number;
  num: number;

  constructor(private siteService: SiteService) { }

  ngOnInit() {
    this.getsites();
  }

  getsites() {
    this.siteService.getall().subscribe(params => {
      console.log('params is ' + params.length);
      if (this.page * 5 < params.length) {
        this.sites = params.slice((this.page - 1) * 5, this.page * 5);
      } else {
        this.sites = params.slice((this.page - 1) * 5, params.length);
      }
      console.log('sites is ' + this.sites.length);
      this.num = params.length;
      this.pages = Math.ceil(this.num / 5);
    });
  }

  add(aname: string, acontent: number) {
    this.siteService.maxint().subscribe(params => {
      const site: Site = {sid: (params + 1).toString() , name: aname, content: acontent, used: false};
      this.siteService.add(site).subscribe(param => {
        if (param) {
          this.getsites();
          alert('场地添加成功!');
        }
      });
    });
  }

  delete(sid: string) {
    this.siteService.delete(sid).subscribe(params => {
      if (params) {
        this.getsites();
        alert('场地删除成功!');
      }
    });
  }

  next() {
    this.siteService.quantity().subscribe(params => {
      console.log('params is ' + params);
      if (this.page * 5 >= params) {
        alert('不能再往后了!');
      } else {
        this.page = this.page + 1;
        this.getsites();
      }
    });
  }

  pre() {
    if (this.page === 1) {
      alert('不能再往前了!');
    } else {
      this.page = this.page - 1;
      this.getsites();
    }
  }

}
