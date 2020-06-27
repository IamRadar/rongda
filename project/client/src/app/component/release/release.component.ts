import { Component, OnInit } from '@angular/core';
import { Notice } from '../../entity/notice';
import { NoticesService } from '../../service/notices/notices.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})
export class ReleaseComponent implements OnInit {

  content: string;

  constructor(private noticeService: NoticesService) { }

  release(atitle: string, awriter: string, acontent: string) {
    console.log('component content is ' + acontent);
    this.noticeService.maxint().subscribe(params => {
      const notice: Notice = {
        nid: (params + 1).toString(),
        title: atitle,
        writer: awriter,
        date: new Date(),
        content: acontent
      };
      this.noticeService.add(notice).subscribe(param => {
        if (param) {
          alert('公告发布成功');
        }
      });
    });
  }

  ngOnInit() {
  }

}
