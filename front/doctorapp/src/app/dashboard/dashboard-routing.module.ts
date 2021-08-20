import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
;

import { DashComponent } from './dash/dash.component';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },
    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
