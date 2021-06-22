import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ButtonStore } from "./button.store";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() class;
  @Input() width;
  @Input() height;
  @Input() loading = false;
  @Output() btnClick = new EventEmitter<any>();
  constructor(private store: ButtonStore) {}

  onButtonClick($event) {
    this.btnClick.emit($event);
  }
}
