import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../global-components/global-components.module";
import { SharedComponentsModule } from "./presentation/shared-components/shared-components.module";
import { BusinessLogicFacade } from "./business-logic/business-logic.facade";
import { BusinessRequirementsInjectionToken } from "./presentation/business-logic.requirements";
import { AdminModule } from "./presentation/admin/admin.module";
import { DashboardModule } from "./presentation/dashboard/dashboard.module";
import { BookService } from "./data/api-services/book.service";

@NgModule({
  imports: [
    BusinessLogicFacade,
    CommonModule,
    GlobalComponentsModule,
    SharedComponentsModule,
    AdminModule,
    DashboardModule,
  ],
  providers: [
    {
      provide: BusinessRequirementsInjectionToken,
      useClass: BusinessLogicFacade,
    },
    BookService,
  ],
  exports: [],
})
export class AdminFeatureModule {}
