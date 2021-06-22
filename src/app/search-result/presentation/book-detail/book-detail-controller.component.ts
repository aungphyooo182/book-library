import { Inject, Component } from "@angular/core";
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
    private store: BookDetailStore
  ) {}

  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public book = {
    name: "name" + 1,
    src: this.testsrc,
    author: "author",
    publisher: "publisher",
    status: "available",
  };
  public loading = false;

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
