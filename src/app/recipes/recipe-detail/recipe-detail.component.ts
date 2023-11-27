import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private _recipeService: RecipesService) {

  }
  @Input() recipeRecived: Recipe;



  onAddToShoppingList() {
    this._recipeService.addIngredientsToShoppingList(this.recipeRecived.ingredients);
  }


}
