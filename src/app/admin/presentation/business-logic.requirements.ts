import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {
  registerBook(book): Observable<any>;
  getAllBooks(): Observable<any>;
  getAlphabetBooks(alphabet): Observable<any>;
}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>("admin Business Requirements");
