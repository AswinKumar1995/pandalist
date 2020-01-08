import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailogComponent } from './dailog/dailog.component';
import { MaterialModule } from '../material/material.module';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TesttodoComponent } from './testtodo/testtodo.component';
import { ProfileComponent } from '../friends/profile/profile.component';





@NgModule({
  declarations: [DailogComponent, TasksComponent, TesttodoComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path:'dailog',component:DailogComponent,pathMatch:'full'},
      {path:'test',component:TesttodoComponent,pathMatch:'full'}
    ])
  ],
  exports:[
    DailogComponent,
    CommonModule,
    MaterialModule
  ]
})
export class TodoModule { }
