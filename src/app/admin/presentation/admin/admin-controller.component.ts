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

  ngOnInit() {
    this.form.valueChanges.subscribe((value) => {
      this.admin = value;
    });
  }

  onLogin(e) {
    console.log("login");
    if (this.admin.username == "admin" && this.admin.password == "password") {
      this.router.navigateByUrl("/dashboard");
    }
  }
}
