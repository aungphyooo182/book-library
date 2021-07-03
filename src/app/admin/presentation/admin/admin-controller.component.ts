import { Inject, Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import {
  BusinessLogicRequirements,
  BusinessRequirementsInjectionToken,
} from "../business-logic.requirements";
import { AdminStore } from "./admin.store";

@Component({
  selector: "app-admin",
  templateUrl: "./admin-controller.component.html",
  styleUrls: ["./admin-controller.component.css"],
})
export class AdminControllerComponent {
  constructor(
    @Inject(BusinessRequirementsInjectionToken)
    private business: BusinessLogicRequirements,
    private store: AdminStore,
    private fb: FormBuilder,
    private router: Router
  ) {}

  public form = this.fb.group({
    username: this.fb.control(""),
    password: this.fb.control(""),
  });
  public usernameHint = "username";
  public passwordHint = "password";

  public admin;
  public authenticated = false;
  public library = "အငှားစာရင်းထည့်ရန်";
  public sale = "အရောင်းစာရင်းထည့်ရန်";

  ngOnInit() {
    if (!localStorage.getItem("admin") && !localStorage.getItem("password")) {
      // this.router.navigateByUrl("/admin");
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }
    this.form.valueChanges.subscribe((value) => {
      this.admin = value;
    });
  }

  onLogin(e) {
    console.log("login");
    if (this.admin.username == "admin" && this.admin.password == "password") {
      localStorage.setItem("admin", btoa(this.admin.username));
      localStorage.setItem("password", btoa(this.admin.password));
      // this.router.navigateByUrl("/dashboard");
      this.authenticated = true;
    }
  }

  clickLibrary() {
    this.router.navigateByUrl("/dashboard");
  }

  clickSale() {
    this.router.navigateByUrl("/sale-dashboard");
  }
}
