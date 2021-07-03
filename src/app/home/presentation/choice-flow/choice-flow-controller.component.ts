import { Inject, Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { ChoiceFlowStore } from "./choice-flow.store";

@Component({
  selector: "app-choice-flow",
  templateUrl: "./choice-flow-controller.component.html",
  styleUrls: ["./choice-flow-controller.component.css"],
})
export class ChoiceFlowControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: ChoiceFlowStore,
    private router: Router
  ) {}

  public library = "စာအုပ်အငှားစာရင်းကြည့်ရန်";
  public sale = "စာအုပ်အရောင်းစာရင်းကြည့်ရန်";

  clickLibrary() {
    this.router.navigateByUrl("/library");
  }

  clickSale() {
    this.router.navigateByUrl("/sale");
  }
}
