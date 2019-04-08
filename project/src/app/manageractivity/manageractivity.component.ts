import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-manageractivity',
  templateUrl: './manageractivity.component.html',
  styleUrls: ['./manageractivity.component.css']
})
export class ManageractivityComponent implements OnInit {

  activities: Activity[];

  constructor(private activityservice: ActivityService) { }

  getactivities() {
    this.activities = this.activityservice.getactivities();
  }

  ngOnInit() {
    this.getactivities();
  }

}
