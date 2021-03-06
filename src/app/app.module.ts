import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { MainComponent } from './layouts/main/main.component';
import { SalesComponent } from './components/sales/sales.component';
import { ReportComponent } from './components/report/report.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ActivityComponent } from './components/activity/activity.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { ActivityItemComponent } from './components/activity-item/activity-item.component';
import { BottomSectionHeaderComponent } from './components/bottom-section-header/bottom-section-header.component';
import { TaskTimePipe } from './pipes/task-time.pipe';
import { ActivityTimePipe } from './pipes/activity-time.pipe';
import { MinutesBeforePipe } from './pipes/minutes-before.pipe';
import { UpperSectionHeaderComponent } from './components/upper-section-header/upper-section-header.component';
import { EntriesPipe } from './pipes/entries.pipe';
import { ForinPipe } from './pipes/forin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    SalesComponent,
    ReportComponent,
    TasksComponent,
    MessagesComponent,
    ActivityComponent,
    TaskItemComponent,
    MessageItemComponent,
    ActivityItemComponent,
    BottomSectionHeaderComponent,
    TaskTimePipe,
    ActivityTimePipe,
    MinutesBeforePipe,
    UpperSectionHeaderComponent,
    EntriesPipe,
    ForinPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
