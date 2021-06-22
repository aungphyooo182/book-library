import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { RegisterBookUseCase } from "./use-cases/register-book.use-case";
import { Observable } from "rxjs";
import { GetAllBooksUseCase } from "./use-cases/get-all-books.use-case";
import { GetAlphabetBooksUseCase } from "./use-cases/get-alphabet-books.use-case";

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
    private registerBookUseCase: RegisterBookUseCase,
    private getAllBooksUseCase: GetAllBooksUseCase,
    private getAlphabetBooksUseCase: GetAlphabetBooksUseCase
  ) {}

  registerBook(book): Observable<any> {
    return this.registerBookUseCase.run(book);
  }

  getAllBooks(): Observable<any> {
    return this.getAllBooksUseCase.run();
  }

  getAlphabetBooks(alphabet): Observable<any> {
    return this.getAlphabetBooksUseCase.run(alphabet);
  }
}
