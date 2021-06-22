import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {
  getAllBooks(): Observable<any>;
}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>("home Business Requirements");
