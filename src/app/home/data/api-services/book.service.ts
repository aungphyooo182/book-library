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

  getAuthorList() {
    let url;
    if (localStorage.getItem("type") == "sale")
      url = this.baseUrl + "/api/salebook/author/all";
    else url = this.baseUrl + "/api/book/author/all";
    return this.http.get(url).pipe(
      map((res: Response) => {
        let result = res;
        return result;
      })
    );
  }
}
