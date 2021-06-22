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
}
