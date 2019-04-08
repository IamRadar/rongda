import { Component, OnInit } from '@angular/core';
import { MyhostService } from '../myhost.service';
import { Activity } from '../activity';

@Component({
  selector: 'app-myhost',
  templateUrl: './myhost.component.html',
  styleUrls: ['./myhost.component.css']
})
export class MyhostComponent implements OnInit {

  myactivities: Activity[];

  constructor(private myhostservice: MyhostService) { }

  getactivity() {
    this.myactivities = this.myhostservice.getactivities();
    console.log('len is' + this.myactivities.length);
  }

  ngOnInit() {
    this.getactivity();
  }

}
