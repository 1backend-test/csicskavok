import { Injectable } from '@angular/core';
import { NgClient } from '@1backend/ng-client';




@Injectable()
export class Service {
  constructor(private ngClient: NgClient) {}

  getHi(): Promise<string> {
    return this.ngClient.call<string>("csicskavok", "vok", "GET", "/hi", {  });
  }

  getImportedHi(): Promise<string> {
    return this.ngClient.call<string>("csicskavok", "vok", "GET", "/imported-hi", {  });
  }

  getSqlExample(): Promise<void> {
    return this.ngClient.call<void>("csicskavok", "vok", "GET", "/sql-example", {  });
  }

  postInputExample(rect: Rectangle, unit: string): Promise<Output> {
    return this.ngClient.call<Output>("csicskavok", "vok", "POST", "/input-example", { "rect": rect, "unit": unit });
  }

}
