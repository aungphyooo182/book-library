import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeFeatureModule } from "./home/home.module";
import { SearchResultFeatureModule } from "./search-result/search-result.module";
import { AdminFeatureModule } from "./admin/admin.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeFeatureModule,
    SearchResultFeatureModule,
    AdminFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
