import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./core/home/home.component";
// import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
// import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
// import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
// import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
// import { SignupComponent } from "./auth/signup/signup.component";
// import { SigninComponent } from "./auth/signin/signin.component";
// import { AuthGuard } from "./auth/auth-guard-service";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  // { path: 'recipes' , component: RecipesComponent, children: [
  //   {path: '', component: RecipeStartComponent},
  //   {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuard]},
  //   {path: ':id', component: RecipeDetailComponent},
  //   {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuard]}
  // ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: 'signup', component: SignupComponent},
  // { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
