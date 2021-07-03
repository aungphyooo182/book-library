import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { ChoiceFlowControllerComponent } from "./choice-flow-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ChoiceFlowControllerComponent],
  exports: [ChoiceFlowControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class ChoiceFlowModule {}
