import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminControllerComponent } from "./admin/presentation/admin/admin-controller.component";
import { DashboardControllerComponent } from "./admin/presentation/dashboard/dashboard-controller.component";
import { EditBookControllerComponent } from "./admin/presentation/edit-book/edit-book-controller.component";
import { SaleDashboardControllerComponent } from "./admin/presentation/sale-dashboard/sale-dashboard-controller.component";
import { SaleEditControllerComponent } from "./admin/presentation/sale-edit/sale-edit-controller.component";
import { BookSaleControllerComponent } from "./home/presentation/book-sale/book-sale-controller.component";
import { ChoiceFlowControllerComponent } from "./home/presentation/choice-flow/choice-flow-controller.component";
import { HomePageControllerComponent } from "./home/presentation/home-page/home-page-controller.component";
import { BookDetailControllerComponent } from "./search-result/presentation/book-detail/book-detail-controller.component";
import { BookListControllerComponent } from "./search-result/presentation/book-list/book-list-controller.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    component: ChoiceFlowControllerComponent,
  },
  {
    path: "library",
    component: HomePageControllerComponent,
  },
  {
    path: "sale",
    component: BookSaleControllerComponent,
  },
  {
    path: "detail/:id",
    component: BookDetailControllerComponent,
  },
  {
    path: "list",
    component: BookListControllerComponent,
  },
  {
    path: "admin",
    component: AdminControllerComponent,
  },
  {
    path: "dashboard",
    component: DashboardControllerComponent,
  },
  {
    path: "edit",
    component: EditBookControllerComponent,
  },
  {
    path: "sale-dashboard",
    component: SaleDashboardControllerComponent,
  },
  {
    path: "sale-edit",
    component: SaleEditControllerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
