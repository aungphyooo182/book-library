import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { RegisterBookUseCase } from "./use-cases/register-book.use-case";
import { Observable } from "rxjs";
import { GetAllBooksUseCase } from "./use-cases/get-all-books.use-case";
import { GetAlphabetBooksUseCase } from "./use-cases/get-alphabet-books.use-case";
import { BookMapper } from "./mappers/book.mapper";
import { GetBookUseCase } from "./use-cases/get-book.use-case";
import { UpdateBookUseCase } from "./use-cases/update-book.use-case";
import { SaleBookMapper } from "src/app/search-result/business-logic/mappers/salebook.mapper";

@NgModule({
  imports: [DataFacade],

  providers: [
    {
      provide: DataRequirementsInjectionToken,
      useClass: DataFacade,
    },
    BookMapper,
    SaleBookMapper,
  ],
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
  constructor(
    private registerBookUseCase: RegisterBookUseCase,
    private getAllBooksUseCase: GetAllBooksUseCase,
    private getAlphabetBooksUseCase: GetAlphabetBooksUseCase,
    private getBookUseCase: GetBookUseCase,
    private updateBookUseCase: UpdateBookUseCase
  ) {}

  registerBook(book): Observable<any> {
    return this.registerBookUseCase.run(book);
  }

  getAllBooks(limit, skip): Observable<any> {
    return this.getAllBooksUseCase.run(limit, skip);
  }

  getAlphabetBooks(alphabet): Observable<any> {
    return this.getAlphabetBooksUseCase.run(alphabet);
  }

  getBook(id): Observable<any> {
    return this.getBookUseCase.run(id);
  }
  updateBook(book): Observable<any> {
    return this.updateBookUseCase.run(book);
  }
}
