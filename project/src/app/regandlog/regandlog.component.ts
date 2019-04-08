import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regandlog',
  templateUrl: './regandlog.component.html',
  styleUrls: ['./regandlog.component.css']
})
export class RegandlogComponent implements OnInit {

  islog = 1;

  changetolog() {
     this.islog = 1;
  }

  changetoreg() {
    this.islog = 0;
 }

  constructor() { }

  ngOnInit() {
  }

}
