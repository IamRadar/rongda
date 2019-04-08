import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { RegandlogComponent } from './regandlog/regandlog.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ShowComponent } from './show/show.component';
import { ActivityComponent } from './activity/activity.component';
import { TakepartComponent } from './takepart/takepart.component';
import { HostComponent } from './host/host.component';
import { ConnectComponent } from './connect/connect.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { ModifyComponent } from './modify/modify.component';
import { MyhostComponent } from './myhost/myhost.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { ManagerpersonComponent } from './managerperson/managerperson.component';
import { ReleaseComponent } from './release/release.component';
import { ManageractivityComponent } from './manageractivity/manageractivity.component';
import { ActivitypersonComponent } from './activityperson/activityperson.component';
import { ManagerapplyComponent } from './managerapply/managerapply.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RegandlogComponent,
    HomepageComponent,
    ShowComponent,
    ActivityComponent,
    TakepartComponent,
    HostComponent,
    ConnectComponent,
    MyhomeComponent,
    ModifyComponent,
    MyhostComponent,
    ManagerhomeComponent,
    ManagerpersonComponent,
    ReleaseComponent,
    ManageractivityComponent,
    ActivitypersonComponent,
    ManagerapplyComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    QuillModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
