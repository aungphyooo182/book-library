import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ListStore } from "./list.store";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() list;
  @Output() listClicked = new EventEmitter<any>();
  constructor(private store: ListStore) {}

  edit(id) {
    this.listClicked.emit(id);
  }
}
