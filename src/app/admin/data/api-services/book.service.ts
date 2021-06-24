import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}

  public baseUrl = environment.baseUrl;

  registerBook(book) {
    let url = this.baseUrl + "/api/book/register";
    return this.http.post(url, book).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getAllBooks() {
    let url = this.baseUrl + "/api/book";
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getAlphabetBooks(alphabet) {
    let url = this.baseUrl + "/api/book/alphabet/" + alphabet;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getBook(id) {
    let url = this.baseUrl + "/api/book/" + id;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = [res];
        return result;
      })
    );
  }

  updateBook(book) {
    let url = this.baseUrl + "/api/book/" + book.id;
    return this.http.patch(url, book).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }
}
