import { Inject, Injectable } from "@angular/core";
import { of } from "rxjs";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";
import { BookMapper } from "../mappers/book.mapper";
import { SaleBookMapper } from "../mappers/salebook.mapper";

@Injectable({
  providedIn: "root",
})
export class GetAllBooksUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper,
    private mappersale: SaleBookMapper
  ) {}

  run(limit, skip) {
    // return of(true);
    console.log(localStorage.getItem("type"), "ss");
    if (localStorage.getItem("type") == "sale")
      return this.data.getAllBooks(limit, skip).pipe(this.mappersale.map);
    else return this.data.getAllBooks(limit, skip).pipe(this.mapper.map);
  }
}
