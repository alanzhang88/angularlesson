
import { NgModule } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../share/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../share/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard-service";

@NgModule({
  declarations:[
    HomeComponent,
    HeaderComponent
  ],
  imports:[
    SharedModule,
    AppRoutingModule
  ],
  exports:[
    AppRoutingModule,
    HeaderComponent
  ],
  providers:[
    ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuard
  ]
})
export class CoreModule{

}
