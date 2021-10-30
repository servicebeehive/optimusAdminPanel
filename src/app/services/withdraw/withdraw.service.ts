import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlanDetailsModel } from "src/app/models/plan-details.model";
import { ReturnResult } from "src/app/models/return-result";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { Observable, throwError as observableThrowError } from "rxjs";
import { GetWithdrawDetails } from "src/app/models/withdraw-get-details.mode";
import { WithdrawDetails } from "src/app/models/withdraw-details.mode";

@Injectable({
  providedIn: "root",
})
export class WithdrawService {
  public serviceAPILink: string = environment.APIUrl;

  constructor(public httpClient: HttpClient) {}

  public getWithDrawDetails(
    withDrawData: GetWithdrawDetails
  ): Observable<ReturnResult<WithdrawDetails[]>> {
    return this.httpClient
      .post<ReturnResult<WithdrawDetails[]>>(
        `http://13.233.81.41:1608/api/v1/getwithdrwoperation`,
        withDrawData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }

  public postPlanDetails(plan: PlanDetailsModel): Observable<ReturnResult> {
    return this.httpClient
      .post<ReturnResult>(
        this.serviceAPILink + `/api/v1/getwithdrwoperation`,
        plan
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }
}
