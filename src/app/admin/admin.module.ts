import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [UserComponent, DashboardComponent],
  imports: [CommonModule, AdminRoutingModule],
  exports: [UserComponent, DashboardComponent],
})
export class AdminModule {}
