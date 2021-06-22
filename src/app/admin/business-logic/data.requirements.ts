import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface DataRequirements {
  registerBook(book): Observable<any>;
  getAllBooks(): Observable<any>;
  getAlphabetBooks(alphabet): Observable<any>;
}

export const DataRequirementsInjectionToken =
  new InjectionToken<DataRequirements>("admin Data Requirements");
