import { Component, Input } from "@angular/core";
import { LogoStore } from "./logo.store";
declare var require: any;
@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent {
  constructor(private store: LogoStore) {}
  public logosrc = require("src/assets/images/test-logo.svg");
  public logoalt = "Logo Image";
}
