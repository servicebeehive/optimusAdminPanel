import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Router } from "@angular/router";
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
      displayName: "General  Setting",
      iconName: "insights",
      route: "admin/general-setting",
    },
    {
      displayName: "Withdraw Approval",
      iconName: "person_add_alt",
      route: "admin/withdraw-approval",
    },

    {
      displayName: "Logout",
      iconName: "logout",
      route: "/",
    },
  ];

  constructor(private navService: NavService) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
