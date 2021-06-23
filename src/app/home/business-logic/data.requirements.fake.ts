import { Observable, of } from "rxjs";
import { DataRequirements } from "./data.requirements";

export class DataRequirementsFake implements DataRequirements {
  getAuthorList(): Observable<any> {
    return of(true);
  }
}
