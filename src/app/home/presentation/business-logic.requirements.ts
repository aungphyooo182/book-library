import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>("home Business Requirements");
