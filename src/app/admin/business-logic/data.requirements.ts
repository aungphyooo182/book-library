import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface DataRequirements {
  registerBook(book): Observable<any>;
  getAllBooks(limit, skip): Observable<any>;
  getAlphabetBooks(alphabet): Observable<any>;
  getBook(id): Observable<any>;
  updateBook(book): Observable<any>;
}

export const DataRequirementsInjectionToken =
  new InjectionToken<DataRequirements>("admin Data Requirements");
