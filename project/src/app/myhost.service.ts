import { Injectable } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class MyhostService {

  activities: Activity[] = [
    { aid: 11, state: 0, hostid: 101, numofp: 0, need: 101, site: '101', sponsor: 'Mr. Nice', money: 1000,
    time: '2019-03-05', name: 'lalala', introduce: '6565656565656565' },
    { aid: 12, state: 0, hostid: 101, numofp: 0, need: 101, site: '101', sponsor: 'Narco', money: 1000,
    time: '2019-03-05', name: 'lalala', introduce: '6565656565656565' },
    { aid: 13, state: 0, hostid: 101, numofp: 0, need: 101, site: '101', sponsor: 'Bombasto', money: 1000,
    time: '2019-03-05', name: 'lalala', introduce: '6565656565656565' },
    { aid: 14, state: 0, hostid: 101, numofp: 0, need: 101, site: '101', sponsor: 'Celeritas', money: 1000,
    time: '2019-03-05', name: 'lalala', introduce: '6565656565656565' },
    { aid: 15, state: 0, hostid: 101, numofp: 0, need: 101, site: '101', sponsor: 'Magneta', money: 1000,
    time: '2019-03-05', name: 'lalala', introduce: '6565656565656565' }
  ];

  getactivities() {
    return this.activities;
  }

  constructor() { }
}
