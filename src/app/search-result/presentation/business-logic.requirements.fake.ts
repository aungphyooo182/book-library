import { Observable, of } from "rxjs";
import { BusinessLogicRequirements } from "./business-logic.requirements";

export class BusinessLogicRequirementsFake
  implements BusinessLogicRequirements
{
  getAllBooks(): Observable<any> {
    return of(true);
  }
  getBook(id): Observable<any> {
    return of(true);
  }
}
