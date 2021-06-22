import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { HomePageControllerComponent } from "./home-page-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomePageControllerComponent],
  exports: [HomePageControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class HomePageModule {}
