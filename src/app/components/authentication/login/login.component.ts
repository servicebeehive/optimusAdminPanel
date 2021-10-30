import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginDetail } from "src/app/models/login.model";
import { ReturnResult } from "src/app/models/return-result";
import { userDetail } from "src/app/models/user-detail.model";
import { AccountService } from "src/app/services/account/account.service";
import { LoginService } from "src/app/services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  addloginDetail = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", Validators.required],
  });

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public loginService: LoginService,
    public accountService: AccountService
  ) {}

  ngOnInit(): void {
    console.log(this.accountService.isLoggedIn());
  }
  OnSubmit() {
    this.router.navigate(["admin/dashboard"]);
  }

  public async onSignin(): Promise<void> {
    const loginDetail_data = new LoginDetail();
    loginDetail_data.emailaddress = this.addloginDetail.value.username;
    loginDetail_data.pwd = this.addloginDetail.value.password;
    // loginDetail_data.emailaddress = "ranjan0201@gmail.com";
    // loginDetail_data.pwd = "Test";
    const result: ReturnResult<userDetail> = await this.loginService
      .getUserDetails(loginDetail_data)
      .toPromise();
    if (result.success) {
      if (result.data?.attribute1 === "admin") {
        this.accountService.setAccessToken(result.data);
        this.router.navigate(["admin/dashboard"]);
      } else {
        console.log("User don't have access");
      }
    } else {
      console.log("invalid User");
    }
  }
}
