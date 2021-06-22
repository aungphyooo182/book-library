import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, AbstractControl } from "@angular/forms";
import { SelectStore } from "./select.store";
declare var require: any;
@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"],
})
export class SelectComponent {
  @Input() hint;
  @Input() class;
  @Input() type;
  @Input() list = [];

  @Output() choseItem = new EventEmitter<any>();
  constructor(private store: SelectStore) {}
  public chevronDownSrc = require("src/assets/images/chevron_down_l.svg");
  public chevronDownAlt = "Chevron Down";
  public showBox = false;

  ngOnInit() {
    for (var i = 0; i < 20; i++) {
      this.list.push("item " + i);
    }
  }

  toggleBox() {
    this.showBox = !this.showBox;
  }

  selectItem(item) {
    this.choseItem.emit(item);
    this.showBox = !this.showBox;
  }
}
