import { Observable, of } from "rxjs";
import { BusinessLogicRequirements } from "./business-logic.requirements";

export class BusinessLogicRequirementsFake
  implements BusinessLogicRequirements
{
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
