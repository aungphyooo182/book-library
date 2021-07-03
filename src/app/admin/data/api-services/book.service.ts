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
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook/register";
    else url = this.baseUrl + "/api/book/register";
    return this.http.post(url, book).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getAllBooks(limit, skip) {
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook?limit=" + limit + "&skip=" + skip;
    else url = this.baseUrl + "/api/book?limit=" + limit + "&skip=" + skip;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getAlphabetBooks(alphabet) {
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook/alphabet/" + alphabet;
    else url = this.baseUrl + "/api/book/alphabet/" + alphabet;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }

  getBook(id) {
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook/" + id;
    else url = this.baseUrl + "/api/book/" + id;
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = [res];
        return result;
      })
    );
  }

  updateBook(book) {
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook/" + book.id;
    else url = this.baseUrl + "/api/book/" + book.id;
    return this.http.patch(url, book).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }
}
