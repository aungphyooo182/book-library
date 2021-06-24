import { Observable, of } from "rxjs";
import { DataRequirements } from "./data.requirements";

export class DataRequirementsFake implements DataRequirements {
  registerBook(book): Observable<any> {
    return of(true);
  }
  getAllBooks(): Observable<any> {
    return of(true);
  }
  getAlphabetBooks(alphabet): Observable<any> {
    return of(true);
  }
  getBook(id): Observable<any> {
    return of(true);
  }
  updateBook(book): Observable<any> {
    return of(true);
  }
}
