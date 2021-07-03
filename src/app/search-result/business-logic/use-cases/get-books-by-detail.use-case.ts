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
export class GetBooksByDetailUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: BookMapper,
    private mappersale: SaleBookMapper
  ) {}

  run(obj) {
    if (localStorage.getItem("type") == "sale")
      return this.data.getBookByDetail(obj).pipe(this.mappersale.map);
    else return this.data.getBookByDetail(obj).pipe(this.mapper.map);
  }
}
