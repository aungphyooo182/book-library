import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { BookDetailControllerComponent } from "./book-detail-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookDetailControllerComponent],
  exports: [BookDetailControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class BookDetailModule {}
