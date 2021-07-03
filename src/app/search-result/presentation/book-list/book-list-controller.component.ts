import { Inject, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "src/app/lib/shared.service";
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
    private route: ActivatedRoute,
    private shared: SharedService
  ) {}

  public list = [];
  public imageList = [];
  public logosrc = require("src/assets/images/test-logo.svg");
  public testsrc =
    "https://secureservercdn.net/72.167.242.48/vb6.3c0.myftpupload.com/wp-content/uploads/2021/05/JoeBiden-205x273.png";
  public loading = false;

  public availableText = "ငှားရမ်းနိုင်ပါသည်";
  public nonAvailableText = "အခြားတစ်ယောက်ငှားထားပါသည်";
  public loadmoreText = "ထပ်ကြည့်မည်";
  public backText = "နောက်သို့ပြန်သွားမည်";
  public showDetailText = "အသေးစိတ်ကြည့်ရန်";
  public noResultText = "ရှာမတွေ့ပါ";
  public loadingText = "ရှာဖွေနေသည်";

  public noResult = false;
  public author;
  public name;

  public limit = 10;
  public pageDefault = 10;
  public pageCount = 0;
  public endPage = false;
  public btnLoading = false;

  public type = "library";

  ngOnInit() {
    this.type = localStorage.getItem("type");
    // this.route.queryParams.subscribe((params) => {
    this.author = this.shared.getAuthor();
    this.name = this.shared.getName();
    // this.author = params.author;
    // this.name = params.name;
    console.log(this.author, this.name);
    if (this.author || this.name) this.searchBooks();
    else this.getAllBooks();
    // });
  }

  searchBooks() {
    this.loading = true;
    if (this.author && this.name) this.searchBooksByDetails();
    else if (this.author) this.searchBooksByAuthor();
    else this.searchBooksByName();
  }

  searchBooksByAuthor() {
    this.business.getBooksByAuthor(this.author).subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
        this.noResult = true;
      }
    );
  }

  searchBooksByName() {
    this.business.getBooksByName(this.name).subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.noResult = true;
        this.loading = false;
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
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.noResult = true;
        this.loading = false;
      }
    );
  }

  getAllBooks() {
    if (this.pageCount == 0) this.loading = true;
    else this.btnLoading = true;
    this.business
      .getAllBooks(this.limit, this.pageDefault * this.pageCount)
      .subscribe(
        (data) => {
          console.log(data);
          if (data.length > 0) {
            this.list = this.list.concat(data);
            this.pageCount++;
          } else {
            this.endPage = true;
          }
          this.loading = false;
          this.btnLoading = false;
        },
        (err) => {
          console.error(err);
          this.noResult = true;
          this.loading = false;
          this.btnLoading = false;
        }
      );
  }

  showDetail(id) {
    console.log(id);
    this.router.navigateByUrl(`/detail/${id}`);
  }

  back() {
    this.router.navigateByUrl(``);
  }
}
