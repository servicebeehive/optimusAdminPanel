import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { GeneralSettingComponent } from './general-setting/general-setting.component';
import { PayoutProcessingComponent } from './payout-processing/payout-processing.component';
import { PlanCreationComponent } from './plan-creation/plan-creation.component';
import { WithdrawApprovalComponent } from './withdraw-approval/withdraw-approval.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',component:DashboardAdminComponent
      },
       {
        path: 'plancreation',component:PlanCreationComponent
      },
      {
        path: 'general-setting',component:GeneralSettingComponent
      },
      {
        path: 'withdraw-approval',component:WithdrawApprovalComponent
      }
     
      // {
      //   path: 'payout-processing',component:PayoutProcessingComponent
      // },
      // {
      //   path: 'payoutthreshold',component:PayoutProcessingComponent
      // },
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
