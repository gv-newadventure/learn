import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
@Input() recipe : Recipe ;

@Output() recipeSelected = new EventEmitter<Recipe>();

onSelected(){
  this.recipeSelected.emit();
}

constructor(){}
}
