import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeFeatureModule } from "./home/home.module";
import { SearchResultFeatureModule } from "./search-result/search-result.module";
import { AdminFeatureModule } from "./admin/admin.module";
import { GlobalComponentsModule } from "./global-components/global-components.module";
import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    GlobalComponentsModule,
    AppRoutingModule,
    // PdfViewerModule,
    HomeFeatureModule,
    SearchResultFeatureModule,
    AdminFeatureModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
