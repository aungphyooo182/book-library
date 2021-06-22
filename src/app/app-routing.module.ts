import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageControllerComponent } from "./home/presentation/home-page/home-page-controller.component";
import { BookDetailControllerComponent } from "./search-result/presentation/book-detail/book-detail-controller.component";
import { BookListControllerComponent } from "./search-result/presentation/book-list/book-list-controller.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  {
    path: "home",
    component: HomePageControllerComponent,
  },
  {
    path: "detail",
    component: BookDetailControllerComponent,
  },
  {
    path: "list",
    component: BookListControllerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
