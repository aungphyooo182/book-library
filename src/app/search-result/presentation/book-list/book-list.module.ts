import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../../../global-components/global-components.module";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { BookListControllerComponent } from "./book-list-controller.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BookListControllerComponent],
  exports: [BookListControllerComponent],
  imports: [
    CommonModule,
    RouterModule,
    GlobalComponentsModule,
    SharedComponentsModule,
  ],
})
export class BookListModule {}
