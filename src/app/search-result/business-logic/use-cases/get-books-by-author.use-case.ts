import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";
import { BookMapper } from "../mappers/book.mapper";

@Injectable({
  providedIn: "root",
})
export class GetBooksByAuthorUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper
  ) {}

  run(author) {
    return this.data.getBooksByAuthor(author).pipe(this.mapper.map);
  }
}
