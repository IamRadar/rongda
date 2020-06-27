import { Component, OnInit } from '@angular/core';
import { Person } from '../../entity/person';
import { Activity } from '../../entity/activity';
import { JoinService } from '../../service/join/join.service';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../service/activity/activity.service';

@Component({
  selector: 'app-activityperson',
  templateUrl: './activityperson.component.html',
  styleUrls: ['./activityperson.component.css']
})
export class ActivitypersonComponent implements OnInit {

  persons: Person[];
  activity: Activity = new Activity();
  page = 1;
  pages: number;
  num: number;
  aaid: string;

  constructor(private joinService: JoinService, private route: ActivatedRoute, private activityService: ActivityService) {
    this.aaid = this.route.snapshot.paramMap.get('aid');
  }

  getActicity() {
    this.activityService.getone(this.aaid).subscribe(params => this.activity = params);
  }

  getall() {
    this.joinService.byaid(this.aaid).subscribe(params => {
      if (this.page * 10 < params.length) {
        this.persons = params.slice((this.page - 1) * 10, this.page * 10);
      } else {
        this.persons = params.slice((this.page - 1) * 10 , params.length);
      }
      this.num = params.length;
      this.pages = Math.ceil(this.num / 10);
    });
  }

  next() {
    this.joinService.quanbyaid(this.aaid).subscribe(params => {
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
    this.getActicity();
    this.getall();
  }

}
