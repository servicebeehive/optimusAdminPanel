import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SharedModule } from '../shared/shared.module';
import { SidenavModule } from '../shared/sidenav/sidenav.module';
import { PlanCreationComponent } from './plan-creation/plan-creation.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PayoutProcessingComponent } from './payout-processing/payout-processing.component';
import { PayoutThresholdComponent } from './payout-threshold/payout-threshold.component';
import { CommoncomponentsModule } from '../shared/commoncomponents/commoncomponents.module';

@NgModule({
  declarations: [
    AdminComponent,
    PlanCreationComponent,
    DashboardAdminComponent,
    PayoutProcessingComponent,
    PayoutThresholdComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    SharedModule,
    CommoncomponentsModule,
  
    SidenavModule,
    MatToolbarModule
  ]
})
export class AdminModule { }
