export class ReturnResult<T = undefined> {
  success: boolean;
  message: string;
  tokenStatus: undefined;
  data?: T;

  constructor() {
    this.success = false;
    this.message = "";
    this.tokenStatus = undefined;
  }
}
