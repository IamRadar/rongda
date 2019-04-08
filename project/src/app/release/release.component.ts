import { Component, OnInit } from '@angular/core';
import { Notice } from '../notice';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

  notice: Notice = { nid: 11, writer: 'Mr. Nice', date: '2019-03-05', title: '404404', content: '6565656565656565' };

  constructor() { }

  ngOnInit() {
  }

}
