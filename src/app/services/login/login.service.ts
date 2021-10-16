import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { catchError } from "rxjs/operators";
import { Observable, throwError as observableThrowError } from "rxjs";
import { userDetail } from "src/app/models/user-detail.model";
import { LoginDetail } from "src/app/models/login.model";
import { ReturnResult } from "src/app/models/return-result";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(public httpClient: HttpClient) {}

  public serviceAPILink: string = environment.APIUrl;

  public getUserDetails(
    loginDetailData: LoginDetail
  ): Observable<ReturnResult<userDetail>> {
    return this.httpClient
      .post<ReturnResult<userDetail>>(
        this.serviceAPILink + `/api/v1/login`,
        loginDetailData
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return observableThrowError(error.error);
        })
      );
  }
}
