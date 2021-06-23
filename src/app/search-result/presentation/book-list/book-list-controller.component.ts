import { Inject, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public list = [];
  public logosrc = require("src/assets/images/test-logo.svg");
  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public loading = false;

  public availableText = "ငှားရမ်းနိုင်ပါသည်";
  public nonAvailableText = "အခြားတစ်ယောက်ငှားထားပါသည်";
  public loadmoreText = "ထပ်ကြည့်မည်";
  public author;
  public name;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.author = params.author;
      this.name = params.name;
      console.log(params);
      console.log(this.author, this.name);
      if (this.author || this.name) this.searchBooks();
      else this.getAllBooks();
    });
  }

  searchBooks() {
    if (this.author && this.name) this.searchBooksByDetails();
    else if (this.author) this.searchBooksByAuthor();
    else this.searchBooksByName();
  }

  searchBooksByAuthor() {
    this.business.getBooksByAuthor(this.author).subscribe(
      (data) => {
        console.log(data);
        this.list = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchBooksByName() {
    this.business.getBooksByName(this.name).subscribe(
      (data) => {
        console.log(data);
        this.list = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  searchBooksByDetails() {
    var obj = {
      author: this.author,
      name: this.name,
    };
    this.business.getBookByDetail(obj).subscribe(
      (data) => {
        console.log(data);
        this.list = data;
      },
      (err) => {
        console.error(err);
      }
    );
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
