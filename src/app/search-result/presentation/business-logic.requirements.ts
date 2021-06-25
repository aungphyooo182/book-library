import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface BusinessLogicRequirements {
  getAllBooks(limit, skip): Observable<any>;
  getBook(id): Observable<any>;
  getBooksByAuthor(author): Observable<any>;
  getBooksByName(name): Observable<any>;
  getBookByDetail(obj): Observable<any>;
}

export const BusinessRequirementsInjectionToken =
  new InjectionToken<BusinessLogicRequirements>(
    "search-result Business Requirements"
  );
