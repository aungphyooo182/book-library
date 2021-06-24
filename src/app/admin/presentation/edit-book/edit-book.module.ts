import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { EditBookControllerComponent } from "./edit-book-controller.component";
import { RouterModule } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { DetailComponent } from "./components/detail/detail.component";
const components = [ListComponent, DetailComponent];
@NgModule({
  declarations: [EditBookControllerComponent, components],
  exports: [EditBookControllerComponent, components],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class EditBookModule {}
