import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface DataRequirements {}

export const DataRequirementsInjectionToken =
  new InjectionToken<DataRequirements>("home Data Requirements");
