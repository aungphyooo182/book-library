import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";

@Injectable({
  providedIn: "root",
})
export class UpdateBookUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements
  ) {}

  run(book) {
    return this.data.updateBook(book);
  }
}
