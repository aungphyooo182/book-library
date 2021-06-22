import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { AdminControllerComponent } from "./admin-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AdminControllerComponent],
  exports: [AdminControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class AdminModule {}
