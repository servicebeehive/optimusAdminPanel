import { Component, OnInit } from "@angular/core";
import { PlanDetailsModel } from "src/app/models/plan-details.model";
import { PlanService } from "src/app/services/plan/plan.service";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-plan-creation",
  templateUrl: "./plan-creation.component.html",
  styleUrls: ["./plan-creation.component.scss"],
})
export class PlanCreationComponent implements OnInit {
  public showUpdate: boolean = false;
  constructor(
    public planService: PlanService,
    public fb: FormBuilder,
    public toastr: ToastrService
  ) {}

  public planDetails?: PlanDetailsModel[] = [];

  addPlanDetail = this.fb.group({
    planName: ["", [Validators.required]],
    planTag: [""],
    contractMonth: ["", Validators.required],
    minimumUnit: ["", [Validators.required, Validators.minLength(10)]],
    maxUnit: [""],
    perUnitPrice: ["", Validators.requiredTrue],
    isStockAvailable: ["", Validators.required],
    maintenancePercentage: ["", Validators.required],
    discount: ["", Validators.required],
    payout: ["", Validators.required],
    comment: ["", Validators.required],
  });

  async ngOnInit() {
    await this.GetPlanDetails();
  }

  displayedColumns: string[] = [
    "no",
    "name",
    "currencycode",
    "ContractMonth",
    "status",
    "symbol",
  ];
  dataSource = new MatTableDataSource<PlanDetailsModel>(this.planDetails);
  selection = new SelectionModel<PlanDetailsModel>(true, []);

  public async GetPlanDetails() {
    const result = await this.planService.getPlanDetails().toPromise();
    if (result.success) {
      this.planDetails = result.data;
      this.dataSource = new MatTableDataSource<PlanDetailsModel>(
        this.planDetails
      );
    }
  }

  public onEditPlan(item: PlanDetailsModel) {
    this.showUpdate = true;
    this.addPlanDetail.get("planName")?.setValue(item.planname);
    this.addPlanDetail.get("planTag")?.setValue(item.plantag);
    this.addPlanDetail.get("contractMonth")?.setValue(item.contract);
    this.addPlanDetail.get("minimumUnit")?.setValue(item.minimumunit);
    this.addPlanDetail.get("maxUnit")?.setValue(item.maxunit);
    this.addPlanDetail.get("perUnitPrice")?.setValue(item.perunitinrprice);
    this.addPlanDetail.get("isStockAvailable")?.setValue(item.isstockavailable);
    this.addPlanDetail
      .get("maintenancePercentage")
      ?.setValue(item.maintenanceper);
    this.addPlanDetail.get("discount")?.setValue(item.discount);
    this.addPlanDetail.get("payout")?.setValue(item.payout);
    this.addPlanDetail.get("comment")?.setValue(item.comment);
  }

  public onDeletePlan(item: PlanDetailsModel) {
    console.log("Delete item", item);
  }

  public onReset() {
    this.addPlanDetail.reset();
    this.showUpdate = false;
  }

  public async onSavePlan() {
    const planDetails = new PlanDetailsModel();
    planDetails.planname = this.addPlanDetail.value.planName;
    (planDetails.currencycode = "USD"),
      (planDetails.plantag = this.addPlanDetail.value.planTag);
    planDetails.contract = this.addPlanDetail.value.contractMonth;
    planDetails.minimumunit = this.addPlanDetail.value.minimumUnit;
    planDetails.maxunit = this.addPlanDetail.value.maxUnit;
    planDetails.perunitinrprice = this.addPlanDetail.value.perUnitPrice;
    planDetails.isstockavailable = this.addPlanDetail.value.isStockAvailable;
    planDetails.maintenanceper = this.addPlanDetail.value.maintenancePercentage;
    planDetails.discount = this.addPlanDetail.value.discount;
    planDetails.payout = this.addPlanDetail.value.payout;
    planDetails.comment = this.addPlanDetail.value.comment;
    planDetails.isactive = true;
    planDetails.operationtype = "INSERT";
    const result = await this.planService
      .postPlanDetails(planDetails)
      .toPromise();
    if (result.success) {
      this.toastr.success("Insert Message", "Plan Inserted Successfully");
    }
  }
  public async onUpdatePlan() {
    const planDetails = new PlanDetailsModel();
    planDetails.planname = this.addPlanDetail.value.planName;
    (planDetails.currencycode = "USD"),
      (planDetails.plantag = this.addPlanDetail.value.planTag);
    planDetails.contract = this.addPlanDetail.value.contractMonth;
    planDetails.minimumunit = this.addPlanDetail.value.minimumUnit;
    planDetails.maxunit = this.addPlanDetail.value.maxUnit;
    planDetails.perunitinrprice = this.addPlanDetail.value.perUnitPrice;
    planDetails.isstockavailable = this.addPlanDetail.value.isStockAvailable;
    planDetails.maintenanceper = this.addPlanDetail.value.maintenancePercentage;
    planDetails.discount = this.addPlanDetail.value.discount;
    planDetails.payout = this.addPlanDetail.value.payout;
    planDetails.comment = this.addPlanDetail.value.comment;
    planDetails.isactive = true;
    planDetails.operationtype = "UPDATE";
    const result = await this.planService
      .postPlanDetails(planDetails)
      .toPromise();
    if (result.success) {
      this.toastr.success("Updated Message", "Plan Updated Successfully");
    }
  }
}
