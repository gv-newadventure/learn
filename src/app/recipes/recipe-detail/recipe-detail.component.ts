import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeRecived: Recipe;

  constructor(private _recipeService: RecipesService,
    private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    // this.recipeRecived = this._recipeService.getRecipe(
    //   +this.route.snapshot.params['id']
    // );

    this.route.params.subscribe((params: Params) => {
      this.recipeRecived = this._recipeService.getRecipe(
        +params['id']
      );
    });
  }


  onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(
      this.recipeRecived.ingredients
    );
  }


}
