import { Inject, Injectable } from "@angular/core";
import { BookMapper } from "src/app/search-result/business-logic/mappers/book.mapper";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";

@Injectable({
  providedIn: "root",
})
export class GetBookUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper
  ) {}

  run(id) {
    return this.data.getBook(id).pipe(this.mapper.map);
  }
}
