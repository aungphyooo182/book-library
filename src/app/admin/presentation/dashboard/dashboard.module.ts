import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { DashboardControllerComponent } from "./dashboard-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [DashboardControllerComponent],
  exports: [DashboardControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class DashboardModule {}
