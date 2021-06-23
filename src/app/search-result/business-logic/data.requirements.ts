import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface DataRequirements {
  getAllBooks(): Observable<any>;
  getBook(id): Observable<any>;
}

export const DataRequirementsInjectionToken =
  new InjectionToken<DataRequirements>("search-result Data Requirements");
