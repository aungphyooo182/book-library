import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { GetAllBooksUseCase } from "./use-cases/get-all-books.use-case";
import { Observable } from "rxjs";

@NgModule({
  imports: [DataFacade],

  providers: [
    {
      provide: DataRequirementsInjectionToken,
      useClass: DataFacade,
    },
  ],
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
  constructor(private getAllBooksUseCase: GetAllBooksUseCase) {}

  getAllBooks(): Observable<any> {
    return this.getAllBooksUseCase.run();
  }
}
