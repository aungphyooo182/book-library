import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ListStore } from "./list.store";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() list;
  @Input() endPage;
  @Output() listClicked = new EventEmitter<any>();
  @Output() btnClicked = new EventEmitter<any>();
  constructor(private store: ListStore) {}

  public loadmoreText = "ပိုမိုကြည့်ရှုရန်";

  edit(id) {
    this.listClicked.emit(id);
  }

  loadmore() {
    this.btnClicked.emit();
  }
}
