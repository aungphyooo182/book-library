import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {
  getAllBooks(): Observable<any>;
  getBook(id): Observable<any>;
}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>(
    "search-result Business Requirements"
  );
