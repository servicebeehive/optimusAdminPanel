import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SharedModule } from "../shared/shared.module";
import { SidenavModule } from "../shared/sidenav/sidenav.module";
import { PlanCreationComponent } from "./plan-creation/plan-creation.component";
import { DashboardAdminComponent } from "./dashboard-admin/dashboard-admin.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { PayoutProcessingComponent } from "./payout-processing/payout-processing.component";
import { PayoutThresholdComponent } from "./payout-threshold/payout-threshold.component";
import { CommoncomponentsModule } from "../shared/commoncomponents/commoncomponents.module";
import { GeneralSettingComponent } from "./general-setting/general-setting.component";
import { WithdrawApprovalComponent } from "./withdraw-approval/withdraw-approval.component";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AdminComponent,
    PlanCreationComponent,
    DashboardAdminComponent,
    PayoutProcessingComponent,
    PayoutThresholdComponent,
    GeneralSettingComponent,
    WithdrawApprovalComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    SharedModule,
    CommoncomponentsModule,
    MatTableModule,
    SidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
