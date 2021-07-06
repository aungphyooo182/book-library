import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { TextComponent } from "./text/text.component";
import { ImageComponent } from "./image/image.component";
import { LogoComponent } from "./logo/logo.component";
import { InputComponent } from "./input/input.component";
import { SelectComponent } from "./select/select.component";
import { ButtonComponent } from "./button/button.component";
import { LoadingComponent } from "./loading/loading.component";
import { LazyLoadImageModule } from "ng-lazyload-image";

const components = [
  TextComponent,
  ImageComponent,
  LogoComponent,
  InputComponent,
  SelectComponent,
  ButtonComponent,
  LoadingComponent,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, ReactiveFormsModule, LazyLoadImageModule],
})
export class GlobalComponentsModule {}
