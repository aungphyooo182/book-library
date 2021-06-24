import { Inject, Injectable } from "@angular/core";
import {
  DataRequirements,
  DataRequirementsInjectionToken,
} from "../data.requirements";
import { AuthorMapper } from "../mappers/author.mapper";

@Injectable({
  providedIn: "root",
})
export class GetAuthorListUseCase {
  constructor(
    @Inject(DataRequirementsInjectionToken) private data: DataRequirements,
    private mapper: AuthorMapper
  ) {}

  run() {
    return this.data.getAuthorList().pipe(this.mapper.map);
  }
}
