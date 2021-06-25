import { DataRequirements } from "../business-logic/data.requirements";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BookService } from "./api-services/book.service";
import { Observable } from "rxjs";

@NgModule({
  imports: [HttpClientModule],
})
export class DataFacade implements DataRequirements {
  constructor(private bookApi: BookService) {}

  getAllBooks(limit, skip) {
    return this.bookApi.getAllBooks(limit, skip);
  }

  getBook(id) {
    return this.bookApi.getBook(id);
  }

  getBooksByAuthor(author) {
    return this.bookApi.getBooksByAuthor(author);
  }

  getBooksByName(name) {
    return this.bookApi.getBooksByName(name);
  }

  getBookByDetail(obj) {
    return this.bookApi.getBookByDetail(obj);
  }
}
