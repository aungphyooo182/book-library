import { Inject, Component } from "@angular/core";
import { Router } from "@angular/router";
import { BookModel } from "src/app/models/book.model";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { EditBookStore } from "./edit-book.store";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book-controller.component.html",
  styleUrls: ["./edit-book-controller.component.css"],
})
export class EditBookControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: EditBookStore,
    private router: Router
  ) {}

  public list = [];
  public editView = false;
  public book = new BookModel();
  public loading = false;

  ngOnInit() {
    if (!localStorage.getItem("admin") && !localStorage.getItem("password")) {
      this.router.navigateByUrl("");
    } else {
      this.getAllBooks();
    }
  }

  getAllBooks() {
    this.loading = true;
    this.business.getAllBooks().subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  getBook(id) {
    this.loading = true;
    this.business.getBook(id).subscribe(
      (data) => {
        console.log(data);
        this.editView = true;
        this.book = data[0];
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  edit(id) {
    console.log(id);
    this.getBook(id);
  }

  updateBook(book) {
    this.loading = true;
    console.log(book);
    book.author = unescape(encodeURIComponent(book.author));
    book.name = unescape(encodeURIComponent(book.name));
    this.business.updateBook(book).subscribe(
      (data) => {
        console.log(data);
        this.loading = false;
        this.editView = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
        this.editView = false;
      }
    );
  }
}
