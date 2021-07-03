import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { BookSaleControllerComponent } from "./book-sale-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookSaleControllerComponent],
  exports: [BookSaleControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class BookSaleModule {}
