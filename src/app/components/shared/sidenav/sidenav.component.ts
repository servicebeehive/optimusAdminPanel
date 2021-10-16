import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "src/app/services/account/account.service";
import { NavItem } from "./menuitem.modal";
import { NavService } from "./nav.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit, AfterViewInit {
  @ViewChild("appDrawer") appDrawer!: ElementRef;

  navItems: NavItem[] = [
    {
      displayName: "Dashboard",
      iconName: "assessment",
      route: "admin/dashboard",
    },
    {
      displayName: "Plan Creation",
      iconName: "edit",
      route: "admin/plancreation",
    },
    {
      displayName: "Payout Processing",
      iconName: "insights",
      route: "admin/payout-processing",
    },
    {
      displayName: "Payout Threshold",
      iconName: "person_add_alt",
      route: "admin/payoutthreshold",
    },

    {
      displayName: "Logout",
      iconName: "logout",
      route: "/",
    },
  ];

  constructor(
    private navService: NavService,
    public accountServices: AccountService
  ) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log("accountServices", this.accountServices.isLoggedIn());
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
