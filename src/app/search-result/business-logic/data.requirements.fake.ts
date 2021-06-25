import { Observable, of } from "rxjs";
import { DataRequirements } from "./data.requirements";

export class DataRequirementsFake implements DataRequirements {
  getAllBooks(limit, skip): Observable<any> {
    return of(true);
  }
  getBook(id): Observable<any> {
    return of(true);
  }
  getBooksByAuthor(author): Observable<any> {
    return of(true);
  }
  getBooksByName(name): Observable<any> {
    return of(true);
  }
  getBookByDetail(obj): Observable<any> {
    return of(true);
  }
}
