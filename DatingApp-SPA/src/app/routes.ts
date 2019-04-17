import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {Routes, RouteConfigLoadEnd} from '@angular/router';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';

export const appRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path:'memberlist', component:MemberlistComponent},
    {path:'messages', component:MessagesComponent},
    {path:'Lists', component:ListsComponent},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}

]