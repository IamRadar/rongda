import { Injectable } from '@angular/core';
import { Notice } from './notice';


@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  notices: Notice[] = [
    { nid: 11, writer: 'Mr. Nice', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 12, writer: 'Narco', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 13, writer: 'Bombasto', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 14, writer: 'Celeritas', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 15, writer: 'Magneta', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 16, writer: 'RubberMan', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 17, writer: 'Dynama', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 18, writer: 'Dr IQ', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 19, writer: 'Magma', date: '2019-03-05', title: '404404', content: '6565656565656565' },
    { nid: 20, writer: 'Tornado', date: '2019-03-05', title: '404404', content: '6565656565656565' }
  ];

  getHero(id: number): Notice {
    return this.notices[id];
  }

  getheroes(): Notice[] {
    return this.notices;
  }

  constructor() { }
}
