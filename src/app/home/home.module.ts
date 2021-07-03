import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../global-components/global-components.module";
import { SharedComponentsModule } from "./presentation/shared-components/shared-components.module";
import { BusinessLogicFacade } from "./business-logic/business-logic.facade";
import { BusinessRequirementsInjectionToken } from "./presentation/business-logic.requirements";
import { HomePageModule } from "./presentation/home-page/home-page.module";
import { SharedService } from "../lib/shared.service";
import { AuthorMapper } from "./business-logic/mappers/author.mapper";
import { ChoiceFlowModule } from "./presentation/choice-flow/choice-flow.module";
import { BookSaleModule } from "./presentation/book-sale/book-sale.module";

@NgModule({
  imports: [
    BusinessLogicFacade,
    CommonModule,
    GlobalComponentsModule,
    SharedComponentsModule,
    HomePageModule,
    ChoiceFlowModule,
    BookSaleModule,
  ],
  providers: [
    {
      provide: BusinessRequirementsInjectionToken,
      useClass: BusinessLogicFacade,
    },
    SharedService,
    AuthorMapper,
  ],
  exports: [],
})
export class HomeFeatureModule {}
