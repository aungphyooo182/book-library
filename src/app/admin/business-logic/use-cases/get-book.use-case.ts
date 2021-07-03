import { Inject, Injectable } from "@angular/core";
import { BookMapper } from "src/app/search-result/business-logic/mappers/book.mapper";
import { SaleBookMapper } from "src/app/search-result/business-logic/mappers/salebook.mapper";
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
    private mapper: BookMapper,
    private salemapper: SaleBookMapper
  ) {}

  run(id) {
    if (localStorage.getItem("type") == "sale")
      return this.data.getBook(id).pipe(this.salemapper.map);
    else return this.data.getBook(id).pipe(this.mapper.map);
  }
}
