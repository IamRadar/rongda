import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-managerperson',
  templateUrl: './managerperson.component.html',
  styleUrls: ['./managerperson.component.css']
})
export class ManagerpersonComponent implements OnInit {

  ishold = true;
  activities: Activity[];

  constructor(private activityservice: ActivityService) { }

  changetohold() {
    this.ishold = true;
  }

  changetojoin() {
    this.ishold = false;
  }

  getactivities() {
    this.activities = this.activityservice.getactivities();
  }

  ngOnInit() {
    this.getactivities();
  }

}
