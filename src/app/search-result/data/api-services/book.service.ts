import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class BookService {
  constructor(private http: HttpClient) {}
  public baseUrl = environment.baseUrl;

  getAllBooks() {
    let url = this.baseUrl + "/api/book";
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

  getBooksByAuthor(author) {
    let url = this.baseUrl + "/api/book/author/" + author;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getBooksByName(name) {
    let url = this.baseUrl + "/api/book/name/" + name;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getBookByDetail(obj) {
    let url =
      this.baseUrl +
      "/api/book/search/detail?author=" +
      obj.author +
      "&name=" +
      obj.name;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }
}
