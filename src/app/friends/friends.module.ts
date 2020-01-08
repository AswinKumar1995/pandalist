import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [FriendlistComponent, ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
    {path:"self",component:ProfileComponent,pathMatch:'full'}
    ])
  ]
})
export class FriendsModule { }
