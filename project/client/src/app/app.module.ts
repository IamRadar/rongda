import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegandlogComponent } from './component/regandlog/regandlog.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { ShowComponent } from './component/show/show.component';
import { ActivityComponent } from './component/activity/activity.component';
import { TakepartComponent } from './component/takepart/takepart.component';
import { HostComponent } from './component/host/host.component';
import { ConnectComponent } from './component/connect/connect.component';
import { MyhomeComponent } from './component/myhome/myhome.component';
import { ModifyComponent } from './component/modify/modify.component';
import { MyhostComponent } from './component/myhost/myhost.component';
import { ManagerhomeComponent } from './component/managerhome/managerhome.component';
import { ManagerpersonComponent } from './component/managerperson/managerperson.component';
import { ReleaseComponent } from './component/release/release.component';
import { ManageractivityComponent } from './component/manageractivity/manageractivity.component';
import { ActivitypersonComponent } from './component/activityperson/activityperson.component';
import { ManagerapplyComponent } from './component/managerapply/managerapply.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './component/logout/logout.component';
import { ManagersiteComponent } from './component/managersite/managersite.component';
import { MyapplyComponent } from './component/myapply/myapply.component';
import { BrandandnavComponent } from './component/brandandnav/brandandnav.component';
import { ManagerbrandandnavComponent } from './component/managerbrandandnav/managerbrandandnav.component';
import { FriendComponent } from './component/friend/friend.component';

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
    ManagerapplyComponent,
    LogoutComponent,
    ManagersiteComponent,
    MyapplyComponent,
    BrandandnavComponent,
    ManagerbrandandnavComponent,
    FriendComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    QuillModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
