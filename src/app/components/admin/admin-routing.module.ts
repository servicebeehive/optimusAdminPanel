import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurdService } from "src/app/services/auth-gaurd/auth-gaurd.service";
import { AdminComponent } from "./admin.component";
import { DashboardAdminComponent } from "./dashboard-admin/dashboard-admin.component";
import { GeneralSettingComponent } from "./general-setting/general-setting.component";
import { PayoutProcessingComponent } from "./payout-processing/payout-processing.component";
import { PlanCreationComponent } from "./plan-creation/plan-creation.component";
import { WithdrawApprovalComponent } from "./withdraw-approval/withdraw-approval.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      {
        path: "dashboard",
        component: DashboardAdminComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "plancreation",
        component: PlanCreationComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "general-setting",
        component: GeneralSettingComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "withdraw-approval",
        component: WithdrawApprovalComponent,
        canActivate: [AuthGaurdService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
