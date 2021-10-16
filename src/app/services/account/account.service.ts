import { Injectable } from "@angular/core";
import { userDetail } from "src/app/models/user-detail.model";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  public ACCESS_TOKEN?: string | null;

  constructor() {}

  public setAccessToken(userDetail?: userDetail) {
    if (userDetail?.usertoken == null) {
      this.ACCESS_TOKEN = null;
      localStorage.removeItem("access-token");
      return;
    }

    this.ACCESS_TOKEN = userDetail.usertoken;
    localStorage.setItem("access-token", this.ACCESS_TOKEN);
  }

  public get accessToken(): string | null {
    if (this.ACCESS_TOKEN != null) {
      return this.ACCESS_TOKEN;
    } else {
      const local_access_token = localStorage.getItem("access-token");
      if (local_access_token != null) {
        this.ACCESS_TOKEN = local_access_token;
        return this.ACCESS_TOKEN;
      }
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.accessToken != null;
  }

  public removeAccessToken() {
    this.ACCESS_TOKEN = null;
    localStorage.removeItem("access-token");
    return;
  }
}
