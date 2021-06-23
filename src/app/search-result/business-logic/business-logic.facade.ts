import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { GetAllBooksUseCase } from "./use-cases/get-all-books.use-case";
import { Observable, of } from "rxjs";
import { GetBookUseCase } from "./use-cases/get-book.use-case";

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
  constructor(
    private getAllBooksUseCase: GetAllBooksUseCase,
    private getBookUseCase: GetBookUseCase
  ) {}

  getAllBooks(): Observable<any> {
    // return of(true);
    return this.getAllBooksUseCase.run();
  }

  getBook(id): Observable<any> {
    return this.getBookUseCase.run(id);
  }
}
