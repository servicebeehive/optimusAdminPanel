import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { AccountService } from "../account/account.service";

@Injectable({
  providedIn: "root",
})
export class AuthGaurdService implements CanActivate {
  constructor(private router: Router, public accountService: AccountService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (!this.accountService.isLoggedIn()) {
      this.router.navigate(["/"], { queryParams: { retUrl: route.url } });
      return false;
    }
    return true;
  }
}
