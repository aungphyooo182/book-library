import { Inject, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { HomePageStore } from "./home-page.store";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page-controller.component.html",
  styleUrls: ["./home-page-controller.component.css"],
})
export class HomePageControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: HomePageStore,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public form = this.fb.group({
    bookName: this.fb.control(""),
    authorName: this.fb.control(""),
  });
  public bookNameHint = "စာအုပ်အမည်";
  public authorNameHint = "စာရေးသူအမည်";
  public searchBtnText = "ရှာမည်";

  public bookName;
  public authorName;

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      //   console.log(value.bookName, value.authorName);
      this.bookName = value.bookName;
    });
  }

  selectedAuthor(item) {
    this.authorName = item;
    this.authorNameHint = item;
  }

  search() {
    if (this.bookName && this.authorName) {
      this.router.navigateByUrl("/detail");
    } else if (this.authorName || this.bookName) {
      this.router.navigateByUrl("/list");
    } else {
      console.log(this.bookName, this.authorName);
    }
  }
}
