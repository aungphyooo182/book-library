import { DataRequirements } from "../business-logic/data.requirements";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./api-services/book.service";

@NgModule({
  imports: [HttpClientModule],
})
export class DataFacade implements DataRequirements {
  constructor(private bookApi: BookService) {}

  registerBook(book) {
    return this.bookApi.registerBook(book);
  }
  getAllBooks() {
    return this.bookApi.getAllBooks();
  }
  getAlphabetBooks(alphabet) {
    return this.bookApi.getAlphabetBooks(alphabet);
  }
}
