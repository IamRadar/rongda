import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-managerapply',
  templateUrl: './managerapply.component.html',
  styleUrls: ['./managerapply.component.css']
})
export class ManagerapplyComponent implements OnInit {

  activities: Activity[];

  constructor(private activityservice: ActivityService) { }

  getactivities() {
    this.activities = this.activityservice.getactivities();
  }

  ngOnInit() {
    this.getactivities();
  }

}
