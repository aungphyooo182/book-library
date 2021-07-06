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
  @Input() type;
  constructor(private store: ImageStore) {}
  public defaultImage;
  ngOnInit() {
    this.defaultImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuS70_V8XORGPmjOWCTXDh1taMvtvv1XO9A&usqp=CAU";
  }
}
