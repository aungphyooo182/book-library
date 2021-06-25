import { Observable, of } from "rxjs";
import { BusinessLogicRequirements } from "./business-logic.requirements";

export class BusinessLogicRequirementsFake
  implements BusinessLogicRequirements
{
  registerBook(book): Observable<any> {
    return of(true);
  }
  getAllBooks(limit, skip): Observable<any> {
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
