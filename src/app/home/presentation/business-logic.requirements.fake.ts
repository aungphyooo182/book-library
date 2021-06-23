import { Observable, of } from "rxjs";
import { BusinessLogicRequirements } from "./business-logic.requirements";

export class BusinessLogicRequirementsFake
  implements BusinessLogicRequirements
{
  getAuthorList(): Observable<any> {
    return of(true);
  }
}
