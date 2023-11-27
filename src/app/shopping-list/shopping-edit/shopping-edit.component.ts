import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppintEditComponent {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private _shoppingListService: ShoppingListService) { }

  onAddItem() {

    this._shoppingListService.addIngredient(
      new Ingredient(this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value));
  }

}
