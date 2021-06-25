import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
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

  run(limit, skip) {
    // return of(true);
    return this.data.getAllBooks(limit, skip).pipe(this.mapper.map);
  }
}
