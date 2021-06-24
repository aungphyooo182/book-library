import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DetailStore } from "./detail.store";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent {
  @Input() book;
  @Output() submitBook = new EventEmitter<any>();
  constructor(private store: DetailStore, private fb: FormBuilder) {}

  public form = this.fb.group({
    name: this.fb.control("", [Validators.required]),
    src: this.fb.control(""),
    author: this.fb.control("", [Validators.required]),
    publisher: this.fb.control("", [Validators.required]),
    shelfNo: this.fb.control("", [Validators.required]),
    status: this.fb.control("", [Validators.required]),
  });

  public bookInfo;
  public changes = false;

  ngOnInit() {
    this.bookInfo = this.book;
    this.form.valueChanges.subscribe((value) => {
      this.changes = true;
      if (value.name) this.bookInfo.name = value.name;
      if (value.src) this.bookInfo.src = value.src;
      if (value.author) this.bookInfo.author = value.author;
      if (value.publisher) this.bookInfo.publisher = value.publisher;
      if (value.shelfNo) this.bookInfo.shelfNo = value.shelfNo;
      if (value.status) this.bookInfo.status = value.status;
    });
  }

  submit() {
    if (this.changes) this.submitBook.emit(this.bookInfo);
  }
}
