import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../global-components/global-components.module";
import { SharedComponentsModule } from "./presentation/shared-components/shared-components.module";
import { BusinessLogicFacade } from "./business-logic/business-logic.facade";
import { BusinessRequirementsInjectionToken } from "./presentation/business-logic.requirements";
import { BookDetailModule } from "./presentation/book-detail/book-detail.module";
import { BookListModule } from "./presentation/book-list/book-list.module";
import { SharedService } from "../lib/shared.service";

@NgModule({
  imports: [
    BusinessLogicFacade,
    CommonModule,
    GlobalComponentsModule,
    SharedComponentsModule,
    BookDetailModule,
    BookListModule,
  ],
  providers: [
    {
      provide: BusinessRequirementsInjectionToken,
      useClass: BusinessLogicFacade,
    },
    SharedService,
  ],
  exports: [],
})
export class SearchResultFeatureModule {}
