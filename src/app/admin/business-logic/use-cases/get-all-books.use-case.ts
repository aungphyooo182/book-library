import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";
import { BookMapper } from "../mappers/book.mapper";

@Injectable({
  providedIn: "root",
})
export class GetAllBooksUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper
  ) {}

  run() {
    return this.data.getAllBooks().pipe(this.mapper.map);
  }
}
