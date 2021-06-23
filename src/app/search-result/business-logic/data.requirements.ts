import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export interface DataRequirements {
  getAllBooks(): Observable<any>;
  getBook(id): Observable<any>;
  getBooksByAuthor(author): Observable<any>;
  getBooksByName(name): Observable<any>;
  getBookByDetail(obj): Observable<any>;
}

export const DataRequirementsInjectionToken =
  new InjectionToken<DataRequirements>("search-result Data Requirements");
