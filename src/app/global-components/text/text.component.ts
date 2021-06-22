import { Component, Input } from "@angular/core";
import { TextStore } from "./text.store";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.css"],
})
export class TextComponent {
  @Input() class;
  constructor(private store: TextStore) {}
}
