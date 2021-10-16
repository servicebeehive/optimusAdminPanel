import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurdService } from "src/app/services/auth-gaurd/auth-gaurd.service";
import { AdminComponent } from "./admin.component";
import { DashboardAdminComponent } from "./dashboard-admin/dashboard-admin.component";
import { PayoutProcessingComponent } from "./payout-processing/payout-processing.component";
import { PlanCreationComponent } from "./plan-creation/plan-creation.component";

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
        path: "payout-processing",
        component: PayoutProcessingComponent,
        canActivate: [AuthGaurdService],
      },
      {
        path: "payoutthreshold",
        component: PayoutProcessingComponent,
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
