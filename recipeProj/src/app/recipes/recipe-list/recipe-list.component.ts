import { Component, OnInit,/*, EventEmitter, Output*/
OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe','This is a test','http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg'),
  //   new Recipe('Another Test Recipe','This is a test','http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg')
  // ];
  recipes: Recipe[];
  subscription: Subscription

  // @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
