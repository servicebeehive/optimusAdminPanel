import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account/account.service";

@Component({
  selector: "app-dashboard-admin",
  templateUrl: "./dashboard-admin.component.html",
  styleUrls: ["./dashboard-admin.component.scss"],
})
export class DashboardAdminComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    console.log("accountService", this.accountService.isLoggedIn());
  }
}
