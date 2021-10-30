import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PlanDetailsModel } from "src/app/models/plan-details.model";
import { ReturnResult } from "src/app/models/return-result";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { Observable, throwError as observableThrowError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PlanService {
  public serviceAPILink: string = environment.APIUrl;

  constructor(public httpClient: HttpClient) {}

  public getPlanDetails(): Observable<ReturnResult<PlanDetailsModel[]>> {
    return this.httpClient
      .get<ReturnResult<PlanDetailsModel[]>>(
        this.serviceAPILink + `/api/v1/getplandetails`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }

  public postPlanDetails(plan: PlanDetailsModel): Observable<ReturnResult> {
    return this.httpClient
      .post<ReturnResult>(this.serviceAPILink + `/api/v1/planoperation`, plan)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }
}
