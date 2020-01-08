import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule,Routes } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from '../home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { TasksComponent } from '../todo/tasks/tasks.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPasswordComponent, NewPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path:'signup',component:SignupComponent,pathMatch:'full'},
      {path:'home',component:HomeComponent,pathMatch:'full'},
      {path:'forgotPassword',component:ForgotPasswordComponent,pathMatch:'full'},
      {path:'response-reset-password/:resettoken',component:NewPasswordComponent},
      {path:'tasks/:userId',component:TasksComponent,pathMatch:'full'}
    ]),
    ToastrModule.forRoot(),
    MaterialModule
  ]
})
export class UserModule { }
