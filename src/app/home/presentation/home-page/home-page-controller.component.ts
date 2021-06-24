import { Inject, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SharedService } from "src/app/lib/shared.service";
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
    private router: Router,
    private shared: SharedService
  ) {}

  public form = this.fb.group({
    bookName: this.fb.control(""),
    authorName: this.fb.control(""),
  });
  public bookNameHint = "စာအုပ်အမည်";
  public authorNameHint = "စာရေးသူအမည်";
  public searchBtnText = "ရှာမည်";
  public listBtnText = "စာအုပ်အားလုံးပြပါ";

  public bookName;
  public authorName;
  public authorList = [];

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      //   console.log(value.bookName, value.authorName);
      this.bookName = value.bookName;
      this.shared.setName(unescape(encodeURIComponent(this.bookName)));
    });
    this.getAuthorList();
    localStorage.removeItem("author");
    localStorage.removeItem("name");
  }

  selectedAuthor(item) {
    this.authorName = item;
    this.authorNameHint = item;
    this.shared.setAuthor(unescape(encodeURIComponent(this.authorName)));
  }

  search() {
    if (this.authorName || this.bookName) {
      if (this.authorName && this.bookName)
        this.router.navigateByUrl(
          `/list?author=${this.authorName}&name=${this.bookName}`
        );
      else if (this.authorName)
        this.router.navigateByUrl(`/list?author=${this.authorName}`);
      else if (this.bookName)
        this.router.navigateByUrl(`/list?name=${this.bookName}`);
    } else {
      console.log(this.bookName, this.authorName);
    }
  }

  list() {
    this.router.navigateByUrl(`/list`);
  }

  getAuthorList() {
    this.business.getAuthorList().subscribe(
      (data) => {
        console.log(data);
        this.authorList = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
