import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalComponentsModule } from "../global-components/global-components.module";
import { SharedComponentsModule } from "./presentation/shared-components/shared-components.module";
import { BusinessLogicFacade } from "./business-logic/business-logic.facade";
import { BusinessRequirementsInjectionToken } from "./presentation/business-logic.requirements";
import { AdminModule } from "./presentation/admin/admin.module";
import { DashboardModule } from "./presentation/dashboard/dashboard.module";
import { BookService } from "./data/api-services/book.service";
import { EditBookModule } from "./presentation/edit-book/edit-book.module";
import { BookMapper } from "./business-logic/mappers/book.mapper";
import { SaleDashboardModule } from "./presentation/sale-dashboard/sale-dashboard.module";
import { SaleEditModule } from "./presentation/sale-edit/sale-edit.module";

@NgModule({
  imports: [
    BusinessLogicFacade,
    CommonModule,
    GlobalComponentsModule,
    SharedComponentsModule,
    AdminModule,
    DashboardModule,
    EditBookModule,
    SaleDashboardModule,
    SaleEditModule,
  ],
  providers: [
    {
      provide: BusinessRequirementsInjectionToken,
      useClass: BusinessLogicFacade,
    },
    BookService,
    BookMapper,
  ],
  exports: [],
})
export class AdminFeatureModule {}
