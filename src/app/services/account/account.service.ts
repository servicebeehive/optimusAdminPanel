import { Injectable } from "@angular/core";
import { userDetail } from "src/app/models/user-detail.model";

@Injectable({
  providedIn: "root",
})
export class AccountService {
  public ACCESS_TOKEN?: string | null;
  public EMAIL_ID?: string | null;

  constructor() {}

  public setAccessToken(userDetail?: userDetail) {
    if (userDetail?.usertoken == null) {
      this.ACCESS_TOKEN = null;
      this.EMAIL_ID = null;
      localStorage.removeItem("access-token");
      return;
    }

    this.ACCESS_TOKEN = userDetail.usertoken;
    this.EMAIL_ID = userDetail.emailid;
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

  public getToken(): string | null {
    return this.ACCESS_TOKEN as string;
  }

  public getEmail(): string | null {
    return this.EMAIL_ID as string;
  }

  public removeAccessToken() {
    this.ACCESS_TOKEN = null;
    this.EMAIL_ID = null;
    localStorage.removeItem("access-token");
    return;
  }
}
