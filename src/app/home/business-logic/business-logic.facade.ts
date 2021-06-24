import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { Observable } from "rxjs";
import { GetAuthorListUseCase } from "./use-cases/get-author-list.use-case";
import { AuthorMapper } from "./mappers/author.mapper";

@NgModule({
  imports: [DataFacade],

  providers: [
    {
      provide: DataRequirementsInjectionToken,
      useClass: DataFacade,
    },
    AuthorMapper,
  ],
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
  constructor(private getAuthorListUseCase: GetAuthorListUseCase) {}
  getAuthorList(): Observable<any> {
    return this.getAuthorListUseCase.run();
  }
}
