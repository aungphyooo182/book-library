import { Component, Input } from "@angular/core";
import { ImageStore } from "./image.store";

@Component({
  selector: "app-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"],
})
export class ImageComponent {
  @Input() src;
  @Input() alt;
  @Input() class;
  constructor(private store: ImageStore) {}
}
