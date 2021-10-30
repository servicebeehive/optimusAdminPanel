import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ReturnResult } from "src/app/models/return-result";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { Observable, throwError as observableThrowError } from "rxjs";
import { AdminSettingData } from "src/app/models/admin-setting-data.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AdminsettingService {
  constructor(public httpClient: HttpClient) {}

  public serviceAPILink: string = environment.APIUrl;

  public getAdminData(): Observable<ReturnResult<AdminSettingData>> {
    return this.httpClient
      .get<ReturnResult<AdminSettingData>>(
        this.serviceAPILink + `/api/v1/getadminsettingdata`
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }

  public updateAdminData(
    adminSettingData?: AdminSettingData
  ): Observable<ReturnResult> {
    return this.httpClient
      .post<ReturnResult>(
        this.serviceAPILink + `/api/v1/getadminsettingoperation`,
        adminSettingData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }
}
