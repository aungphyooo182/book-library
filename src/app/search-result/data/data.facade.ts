import { DataRequirements } from "../business-logic/data.requirements";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./api-services/book.service";

@NgModule({
  imports: [HttpClientModule],
})
export class DataFacade implements DataRequirements {
  constructor(private bookApi: BookService) {}

  getAllBooks() {
    return this.bookApi.getAllBooks();
  }

  getBook(id) {
    return this.bookApi.getBook(id);
  }
}
