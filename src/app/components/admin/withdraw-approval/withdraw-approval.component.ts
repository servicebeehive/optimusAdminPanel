import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { WithdrawDetails } from "src/app/models/withdraw-details.mode";
import { GetWithdrawDetails } from "src/app/models/withdraw-get-details.mode";
import { WithdrawService } from "src/app/services/withdraw/withdraw.service";
import { CommonpopupComponent } from "../../shared/commonpopup/commonpopup.component";
export interface DialogData {
  animal: "panda" | "unicorn" | "lion";
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];

@Component({
  selector: "app-withdraw-approval",
  templateUrl: "./withdraw-approval.component.html",
  styleUrls: ["./withdraw-approval.component.scss"],
})
export class WithdrawApprovalComponent implements OnInit {
  public withdrawDetails?: WithdrawDetails[] = [];

  constructor(
    public dialog: MatDialog,
    public withDrawService: WithdrawService
  ) {}

  ngOnInit(): void {
    this.getWithDrawDetail();
  }

  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;
  openDialog() {
    const dialogRef = this.dialog.open(CommonpopupComponent, {
      data: {
        animal: "panda",
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  public async getWithDrawDetail() {
    const getWithdrawDetailsData = new GetWithdrawDetails();
    getWithdrawDetailsData.operationtype = "WITHDRAWDETAILS";
    const result = await this.withDrawService
      .getWithDrawDetails(getWithdrawDetailsData)
      .toPromise();
    if (result.success) {
      this.withdrawDetails = result.data;
      console.log("this.withdrawDetails");
    }
  }
}
