import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {
  registerBook(book): Observable<any>;
  getAllBooks(): Observable<any>;
  getAlphabetBooks(alphabet): Observable<any>;
  getBook(id): Observable<any>;
  updateBook(book): Observable<any>;
}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>("admin Business Requirements");
