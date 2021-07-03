import { Inject, Injectable } from "@angular/core";
import { SaleBookMapper } from "src/app/search-result/business-logic/mappers/salebook.mapper";
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
    private mapper: BookMapper,
    private salemapper: SaleBookMapper
  ) {}

  run(limit, skip) {
    if (localStorage.getItem("type") == "sale")
      return this.data.getAllBooks(limit, skip).pipe(this.salemapper.map);
    else return this.data.getAllBooks(limit, skip).pipe(this.mapper.map);
  }
}
