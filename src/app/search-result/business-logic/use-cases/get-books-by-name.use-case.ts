import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";
import { BookMapper } from "../mappers/book.mapper";
import { SaleBookMapper } from "../mappers/salebook.mapper";

@Injectable({
  providedIn: "root",
})
export class GetBooksByNameUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper,
    private mappersale: SaleBookMapper
  ) {}

  run(name) {
    if (localStorage.getItem("type") == "sale")
      return this.data.getBooksByName(name).pipe(this.mappersale.map);
    else return this.data.getBooksByName(name).pipe(this.mapper.map);
  }
}
