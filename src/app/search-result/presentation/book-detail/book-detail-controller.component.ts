import { Inject, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { BookDetailStore } from "./book-detail.store";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail-controller.component.html",
  styleUrls: ["./book-detail-controller.component.css"],
})
export class BookDetailControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: BookDetailStore,
    private route: ActivatedRoute
  ) {}

  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public book;
  public loading = false;
  public bookId;

  public author = "စာရေးသူ";
  public publisher = "စာအုပ်တိုက်";
  public status = "ငှားရမ်းနိုင်မှုအခြေအနေ";
  public yes = "ငှားရမ်းနိုင်ပါသည်";
  public no = "တခြားသူမှ ငှားရမ်းထားပါသည်";

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.bookId = params.id;
    });
    this.getBook();
  }

  getBook() {
    this.loading = true;
    this.business.getBook(this.bookId).subscribe(
      (data) => {
        console.log(data);
        this.book = data;
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }
}
