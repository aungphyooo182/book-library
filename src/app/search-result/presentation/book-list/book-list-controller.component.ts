import { Inject, Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { BookListStore } from "./book-list.store";
declare var require: any;
@Component({
  selector: "app-book-list",
  templateUrl: "./book-list-controller.component.html",
  styleUrls: ["./book-list-controller.component.css"],
})
export class BookListControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: BookListStore,
    private router: Router
  ) {}

  public list = [];
  public logosrc = require("src/assets/images/test-logo.svg");
  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public loading = false;

  public availableText = "ငှားရမ်းနိုင်ပါသည်";
  public nonAvailableText = "အခြားတစ်ယောက်ငှားထားပါသည်";
  public loadmoreText = "ထပ်ကြည့်မည်";

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    this.business.getAllBooks().subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.loading = false;
      }
    );
  }

  showDetail(id) {
    console.log(id);
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
