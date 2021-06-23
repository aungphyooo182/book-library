import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";

@Injectable({
  providedIn: "root",
})
export class GetAllBooksUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements
  ) {}

  run() {
    // return of(true);
    return this.data.getAllBooks();
  }
}
