import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";

@Injectable({
  providedIn: "root",
})
export class RegisterBookUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements
  ) {}

  run(book) {
    return this.data.registerBook(book);
  }
}
