import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { SaleDashboardControllerComponent } from "./sale-dashboard-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [SaleDashboardControllerComponent],
  exports: [SaleDashboardControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class SaleDashboardModule {}
