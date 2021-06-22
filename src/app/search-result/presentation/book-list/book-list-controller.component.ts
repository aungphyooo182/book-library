import { Inject, Component } from "@angular/core";
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
    private store: BookListStore
  ) {}

  public list = [];
  public logosrc = require("src/assets/images/test-logo.svg");
  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public loading = false;
  ngOnInit() {
    for (var i = 0; i <= 5; i++) {
      var book = {
        name: "name" + i,
        src: this.testsrc,
        author: "author",
        publisher: "publisher",
        status: "available",
      };
      this.list.push(book);
    }
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
