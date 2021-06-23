import { Observable, of } from "rxjs";
import { DataRequirements } from "./data.requirements";

export class DataRequirementsFake implements DataRequirements {
  getAllBooks(): Observable<any> {
    return of(true);
  }
  getBook(id): Observable<any> {
    return of(true);
  }
}
