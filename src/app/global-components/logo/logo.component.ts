import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { LogoStore } from "./logo.store";
declare var require: any;
@Component({
  selector: "app-logo",
  templateUrl: "./logo.component.html",
  styleUrls: ["./logo.component.css"],
})
export class LogoComponent {
  constructor(private store: LogoStore, private router: Router) {}
  public logosrc = require("src/assets/images/pol.png");
  public logoalt = "Logo Image";

  clicked() {
    this.router.navigateByUrl("");
  }
}
