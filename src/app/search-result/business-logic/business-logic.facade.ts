import { BusinessLogicRequirements } from "../presentation/business-logic.requirements";
import { NgModule } from "@angular/core";
import { DataRequirementsInjectionToken } from "./data.requirements";
import { DataFacade } from "../data/data.facade";
import { GetAllBooksUseCase } from "./use-cases/get-all-books.use-case";
import { Observable, of } from "rxjs";
import { GetBookUseCase } from "./use-cases/get-book.use-case";
import { GetBooksByAuthorUseCase } from "./use-cases/get-books-by-author.use-case";
import { GetBooksByNameUseCase } from "./use-cases/get-books-by-name.use-case";
import { GetBooksByDetailUseCase } from "./use-cases/get-books-by-detail.use-case";
import { BookMapper } from "./mappers/book.mapper";

@NgModule({
  imports: [DataFacade],

  providers: [
    {
      provide: DataRequirementsInjectionToken,
      useClass: DataFacade,
    },
    BookMapper,
  ],
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
  constructor(
    private getAllBooksUseCase: GetAllBooksUseCase,
    private getBookUseCase: GetBookUseCase,
    private getBooksByAuthorUseCase: GetBooksByAuthorUseCase,
    private getBooksByNameUseCase: GetBooksByNameUseCase,
    private getBooksByDetailUseCase: GetBooksByDetailUseCase
  ) {}

  getAllBooks(limit, skip): Observable<any> {
    // return of(true);
    return this.getAllBooksUseCase.run(limit, skip);
  }

  getBook(id): Observable<any> {
    return this.getBookUseCase.run(id);
  }

  getBooksByAuthor(author): Observable<any> {
    return this.getBooksByAuthorUseCase.run(author);
  }

  getBooksByName(name): Observable<any> {
    return this.getBooksByNameUseCase.run(name);
  }

  getBookByDetail(obj): Observable<any> {
    return this.getBooksByDetailUseCase.run(obj);
  }
}
