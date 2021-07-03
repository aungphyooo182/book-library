import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { SaleEditControllerComponent } from "./sale-edit-controller.component";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/detail/detail.component";
const components = [ListComponent, DetailComponent];
@NgModule({
  declarations: [SaleEditControllerComponent, components],
  exports: [SaleEditControllerComponent, components],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class SaleEditModule {}
