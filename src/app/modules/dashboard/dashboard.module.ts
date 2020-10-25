import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './page/event/event.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dashboard/create',
    component: EventComponent,
  },
  {
    path: 'dashboard/event/:id',
    component: EventComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, EventComponent],
  imports: [RouterModule.forChild(routes), SharedModule, CommonModule],
  exports: [RouterModule, CommonModule],
})
export class DashboardModule {}
