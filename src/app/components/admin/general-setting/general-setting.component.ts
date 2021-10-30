import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AdminSettingData } from "src/app/models/admin-setting-data.model";
import { AdminsettingService } from "src/app/services/adminsetting/adminsetting.service";
@Component({
  selector: "app-general-setting",
  templateUrl: "./general-setting.component.html",
  styleUrls: ["./general-setting.component.scss"],
})
export class GeneralSettingComponent implements OnInit {
  constructor(
    public adminsettingService: AdminsettingService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  public adminSettingData?: AdminSettingData;

  addGeneralSettingDetail = this.fb.group({
    currencycode: ["", [Validators.required]],
    usdratebyexch: ["", Validators.required],
    usdratebyadmin: ["", Validators.required],
    CheckISAdminRate: [false, [Validators.required]],
    infrapercentage: ["", Validators.required],
    withdrawthreshlimit: ["", Validators.required],
    totalunit: ["", [Validators.required]],
    totalunitsold: ["", Validators.required],
    isactive: [false, Validators.required],
  });

  async ngOnInit() {
    await this.getAdminSettingData();
  }

  public async getAdminSettingData() {
    const result = await this.adminsettingService.getAdminData().toPromise();
    if (result.success) {
      this.adminSettingData = result.data;
      console.log("adminSettingData", this.adminSettingData);
      this.addGeneralSettingDetail
        .get("currencycode")
        ?.setValue(this.adminSettingData?.currencycode);
      this.addGeneralSettingDetail
        .get("usdratebyexch")
        ?.setValue(this.adminSettingData?.usdratebyexch);
      this.addGeneralSettingDetail
        .get("usdratebyadmin")
        ?.setValue(this.adminSettingData?.usdratebyadmin);
      this.addGeneralSettingDetail
        .get("CheckISAdminRate")
        ?.setValue(this.adminSettingData?.isusdratebyadminactive);
      this.addGeneralSettingDetail
        .get("infrapercentage")
        ?.setValue(this.adminSettingData?.infrapercentage);
      this.addGeneralSettingDetail
        .get("withdrawthreshlimit")
        ?.setValue(this.adminSettingData?.withdrawthreshlimit);
      this.addGeneralSettingDetail
        .get("totalunit")
        ?.setValue(this.adminSettingData?.totalunit);
      this.addGeneralSettingDetail
        .get("totalunitsold")
        ?.setValue(this.adminSettingData?.totalunitsold);
      this.addGeneralSettingDetail
        .get("isactive")
        ?.setValue(this.adminSettingData?.isactive);
    }
  }

  public async onSave() {
    if (this.adminSettingData != null) {
      this.adminSettingData.currencycode =
        this.addGeneralSettingDetail.value.currencycode;
      this.adminSettingData.usdratebyexch =
        this.addGeneralSettingDetail.value.usdratebyexch;
      this.adminSettingData.usdratebyadmin =
        this.addGeneralSettingDetail.value.usdratebyadmin;
      this.adminSettingData.isusdratebyadminactive =
        this.addGeneralSettingDetail.value.CheckISAdminRate;
      this.adminSettingData.withdrawthreshlimit =
        this.addGeneralSettingDetail.value.withdrawthreshlimit;
      this.adminSettingData.totalunit =
        this.addGeneralSettingDetail.value.totalunit;
      this.adminSettingData.totalunitsold =
        this.addGeneralSettingDetail.value.totalunitsold;
      this.adminSettingData.isactive =
        this.addGeneralSettingDetail.value.isactive;
      this.adminSettingData.infrapercentage =
        this.addGeneralSettingDetail.value.infrapercentage;
    }
    const result = await this.adminsettingService
      .updateAdminData(this.adminSettingData)
      .toPromise();
    if (result.success) {
      this.toastr.success("Updated Message", "Admin Updated Successfully");
    }
  }
}
