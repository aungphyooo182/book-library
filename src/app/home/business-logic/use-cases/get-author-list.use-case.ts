import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";

@Injectable({
  providedIn: "root",
})
export class GetAuthorListUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements
  ) {}

  run() {
    return this.data.getAuthorList();
  }
}
