import { Inject, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { BookModel } from "src/app/models/book.model";
import { KeywordModel } from "src/app/models/keyword.model";
import { SaleBookModel } from "src/app/models/salebook.model";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { SaleDashboardStore } from "./sale-dashboard.store";

@Component({
  selector: "app-sale-dashboard",
  templateUrl: "./sale-dashboard-controller.component.html",
  styleUrls: ["./sale-dashboard-controller.component.css"],
})
export class SaleDashboardControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: SaleDashboardStore,
    private fb: FormBuilder,
    private router: Router
  ) {}
  public form = this.fb.group({
    name: this.fb.control("", [Validators.required]),
    src: this.fb.control(""),
    author: this.fb.control("", [Validators.required]),
    publisher: this.fb.control(""),
    alphabet: this.fb.control("", [Validators.required]),
    price: this.fb.control("", [Validators.required]),
  });

  public bookInfo = new SaleBookModel();
  public nameHint = "name";
  public srcHint = "src";
  public authorHint = "author";
  public publisherHint = "publisher";
  public alphabetHint = "alphabet";
  public priceHint = "price";
  public totalBooks = 0;
  public keyword = new KeywordModel();

  ngOnInit() {
    if (!localStorage.getItem("admin") && !localStorage.getItem("password")) {
      this.router.navigateByUrl("/admin");
    }
    this.form.valueChanges.subscribe((value) => {
      this.bookInfo = value;
    });
    localStorage.setItem("type", "sale");
  }

  getAllBooks() {
    this.business.getAllBooks(null, null).subscribe(
      (data) => {
        console.log(data.length, " all books lenght");
        this.totalBooks = ++data.length; // start from 0
        this.prepareData();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  switchBurmesetoEnglishKeyword(alphabet) {
    console.log(this.keyword[alphabet]);
    this.getAlpahbetBooks(this.keyword[alphabet]);
  }

  getAlpahbetBooks(alphabet) {
    this.business.getAlphabetBooks(alphabet).subscribe(
      (data) => {
        console.log(data);
        this.bookInfo.alphabet = alphabet + "-" + ++data.length;
        this.saveBook();
      },
      (err) => {
        console.log(err);
        if (err.status == 400) {
          this.bookInfo.alphabet = alphabet + "-" + "1";
          this.saveBook();
        }
      }
    );
  }

  collectData(e) {
    if (this.form.errors) {
    } else {
      console.log(this.bookInfo);
      this.bookInfo.author = unescape(encodeURIComponent(this.bookInfo.author));
      this.bookInfo.name = unescape(encodeURIComponent(this.bookInfo.name));
      //   this.bookInfo.status = 1;
      this.bookInfo.src = this.bookInfo.src
        ? this.bookInfo.src
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuS70_V8XORGPmjOWCTXDh1taMvtvv1XO9A&usqp=CAU";
      this.bookInfo.publisher = this.bookInfo.publisher
        ? this.bookInfo.publisher
        : "-";
      this.getAllBooks();
    }
  }

  prepareData() {
    // this.bookInfo.shelfNo = 1;
    // this.bookInfo.libraryNo = this.totalBooks;
    this.switchBurmesetoEnglishKeyword(this.bookInfo.alphabet);
  }

  saveBook() {
    console.log("final data ", this.bookInfo);
    this.business.registerBook(this.bookInfo).subscribe(
      (data) => {
        console.log(data);
        this.form.reset();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  edit() {
    this.router.navigateByUrl("/sale-edit");
  }
}
